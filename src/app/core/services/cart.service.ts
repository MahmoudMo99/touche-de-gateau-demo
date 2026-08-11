import { computed, Injectable, signal } from '@angular/core';
import { CartItem } from '../models/cart-item.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly _items = signal<CartItem[]>([]);

  readonly items = this._items.asReadonly();

  readonly totalItems = computed(() =>
    this._items().reduce((total, item) => total + item.quantity, 0),
  );

  readonly totalPrice = computed(() =>
    this._items().reduce((total, item) => total + item.product.price * item.quantity, 0),
  );

  addProduct(product: Product, quantity = 1): void {
    if (quantity <= 0) {
      return;
    }

    this._items.update((items) => {
      const existingItem = items.find((item) => item.product.id === product.id);

      if (existingItem) {
        return items.map((item) =>
          item.product.id === product.id
            ? {
                ...item,
                quantity: item.quantity + quantity,
              }
            : item,
        );
      }

      return [
        ...items,
        {
          product,
          quantity,
        },
      ];
    });
  }

  increaseQuantity(productId: number): void {
    this._items.update((items) =>
      items.map((item) =>
        item.product.id === productId
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      ),
    );
  }

  decreaseQuantity(productId: number): void {
    this._items.update((items) =>
      items
        .map((item) =>
          item.product.id === productId
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }

  removeProduct(productId: number): void {
    this._items.update((items) => items.filter((item) => item.product.id !== productId));
  }

  clearCart(): void {
    this._items.set([]);
  }
}
