import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { PRODUCTS } from '../../../../core/data/products.data';
import { Product } from '../../../../core/models/product.model';
import { CartService } from '../../../../core/services/cart.service';
import { ProductCard } from '../../../../shared/components/product-card/product-card';

@Component({
  selector: 'app-home',
  imports: [RouterLink, ProductCard],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private readonly cartService = inject(CartService);

  readonly featuredProducts = PRODUCTS.filter((product) => product.featured);

  onAddToCart(product: Product): void {
    this.cartService.addProduct(product);
  }
}
