import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  private readonly router = inject(Router);

  readonly cartService = inject(CartService);

  readonly searchOpened = signal(false);
  readonly searchValue = signal('');

  toggleSearch(): void {
    this.searchOpened.update((value) => !value);

    if (!this.searchOpened()) {
      this.searchValue.set('');
    }
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

    this.searchOpened.set(false);
    this.searchValue.set('');
  }
}
