import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { PRODUCTS } from '../../../../core/data/products.data';
import { Product } from '../../../../core/models/product.model';
import { CartService } from '../../../../core/services/cart.service';
import { ProductCard } from '../../../../shared/components/product-card/product-card';

@Component({
  selector: 'app-product-details',
  imports: [RouterLink, ProductCard],
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss',
})
export class ProductDetails {
  private readonly route = inject(ActivatedRoute);
  private readonly cartService = inject(CartService);

  private readonly params = toSignal(this.route.paramMap, {
    initialValue: this.route.snapshot.paramMap,
  });

  readonly quantity = signal(1);
  readonly added = signal(false);

  readonly product = computed(() => {
    const id = Number(this.params().get('id'));

    return PRODUCTS.find((product) => product.id === id);
  });

  readonly relatedProducts = computed(() => {
    const currentProduct = this.product();

    if (!currentProduct) {
      return [];
    }

    return PRODUCTS.filter(
      (product) => product.id !== currentProduct.id && product.category === currentProduct.category,
    ).slice(0, 3);
  });

  increaseQuantity(): void {
    this.quantity.update((quantity) => quantity + 1);
  }

  decreaseQuantity(): void {
    this.quantity.update((quantity) => Math.max(1, quantity - 1));
  }

  addToCart(): void {
    const product = this.product();

    if (!product) {
      return;
    }

    this.cartService.addProduct(product, this.quantity());

    this.added.set(true);

    setTimeout(() => {
      this.added.set(false);
    }, 1000);
  }

  addRelatedProduct(product: Product): void {
    this.cartService.addProduct(product);
  }
}
