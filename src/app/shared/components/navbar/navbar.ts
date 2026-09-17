import { ChangeDetectionStrategy, Component, HostListener, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import {
  LucideCakeSlice,
  LucideHome,
  LucideInfo,
  LucideMenu,
  LucidePackage,
  LucidePhone,
  LucideSearch,
  LucideShoppingCart,
  LucideX,
} from '@lucide/angular';

import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    RouterLinkActive,
    LucideCakeSlice,
    LucideHome,
    LucideInfo,
    LucideMenu,
    LucidePackage,
    LucidePhone,
    LucideSearch,
    LucideShoppingCart,
    LucideX,
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar {
  private readonly router = inject(Router);

  readonly cartService = inject(CartService);

  readonly searchOpened = signal(false);
  readonly menuOpened = signal(false);
  readonly searchValue = signal('');

  @HostListener('window:keydown.escape')
  onEscape(): void {
    this.closeSearch();
    this.closeMenu();
  }

  toggleSearch(): void {
    this.searchOpened.update((value) => !value);
    this.menuOpened.set(false);

    if (!this.searchOpened()) {
      this.searchValue.set('');
    }
  }

  closeSearch(): void {
    this.searchOpened.set(false);
    this.searchValue.set('');
  }

  toggleMenu(): void {
    this.menuOpened.update((value) => !value);
    this.closeSearch();
  }

  closeMenu(): void {
    this.menuOpened.set(false);
  }

  onSearchInput(event: Event): void {
    const input = event.target as HTMLInputElement;

    this.searchValue.set(input.value);
  }

  search(): void {
    const value = this.searchValue().trim();

    if (!value) {
      return;
    }

    this.router.navigate(['/products'], {
      queryParams: {
        search: value,
      },
    });

    this.closeSearch();
    this.closeMenu();
  }
}
