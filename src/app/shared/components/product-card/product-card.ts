import { Component, input, output, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-product-card',
  imports: [RouterLink],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {
  product = input.required<Product>();

  addToCart = output<Product>();

  readonly added = signal(false);

  onAddToCart(): void {
    this.addToCart.emit(this.product());

    this.added.set(true);

    setTimeout(() => {
      this.added.set(false);
    }, 800);
  }
}
