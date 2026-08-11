import { Component, computed, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';

import { PRODUCTS } from '../../../../core/data/products.data';
import { Product } from '../../../../core/models/product.model';
import { CartService } from '../../../../core/services/cart.service';
import { ProductCard } from '../../../../shared/components/product-card/product-card';

@Component({
  selector: 'app-products',
  imports: [ProductCard],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products {
  private readonly cartService = inject(CartService);
  private readonly route = inject(ActivatedRoute);

  private readonly queryParams = toSignal(this.route.queryParamMap, {
    initialValue: this.route.snapshot.queryParamMap,
  });

  readonly products = PRODUCTS;

  readonly searchTerm = signal('');
  readonly selectedCategory = signal('الكل');

  readonly categories = ['الكل', ...new Set(PRODUCTS.map((product) => product.category))];

  readonly filteredProducts = computed(() => {
    const search = this.searchTerm().trim().toLowerCase();

    const category = this.selectedCategory();

    return this.products.filter((product) => {
      const matchesCategory = category === 'الكل' || product.category === category;

      const matchesSearch =
        !search ||
        product.nameAr.toLowerCase().includes(search) ||
        product.nameEn.toLowerCase().includes(search) ||
        product.code.toLowerCase().includes(search) ||
        product.category.toLowerCase().includes(search);

      return matchesCategory && matchesSearch;
    });
  });

  constructor() {
    effect(() => {
      const search = this.queryParams().get('search') ?? '';

      const category = this.queryParams().get('category') ?? 'الكل';

      this.searchTerm.set(search);

      if (this.categories.includes(category)) {
        this.selectedCategory.set(category);
      } else {
        this.selectedCategory.set('الكل');
      }
    });
  }

  selectCategory(category: string): void {
    this.selectedCategory.set(category);
  }

  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;

    this.searchTerm.set(input.value);
  }

  resetFilters(): void {
    this.searchTerm.set('');
    this.selectedCategory.set('الكل');
  }

  onAddToCart(product: Product): void {
    this.cartService.addProduct(product);
  }
}
