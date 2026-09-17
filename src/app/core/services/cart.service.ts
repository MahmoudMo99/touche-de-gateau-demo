import { computed, effect, Injectable, signal } from '@angular/core';

import { PRODUCTS } from '../data/products.data';
import { CartItem } from '../models/cart-item.model';
import { Product } from '../models/product.model';

interface StoredCartItem {
  productId: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly storageKey = 'touche_de_gateau_cart_items';
  private readonly _items = signal<CartItem[]>(this.readStoredItems());

  readonly items = this._items.asReadonly();

  readonly totalItems = computed(() =>
    this._items().reduce((total, item) => total + item.quantity, 0),
  );

  readonly uniqueItemsCount = computed(() => this._items().length);

  readonly totalPrice = computed(() =>
    this._items().reduce((total, item) => total + item.product.price * item.quantity, 0),
  );

  constructor() {
    effect(() => {
      this.saveItems(this._items());
    });
  }

  addProduct(product: Product, quantity = 1): void {
    const safeQuantity = Math.floor(quantity);

    if (safeQuantity <= 0) {
      return;
    }

    this._items.update((items) => {
      const existingItem = items.find((item) => item.product.id === product.id);

      if (existingItem) {
        return items.map((item) =>
          item.product.id === product.id
            ? {
                ...item,
                quantity: item.quantity + safeQuantity,
              }
            : item,
        );
      }

      return [
        ...items,
        {
          product,
          quantity: safeQuantity,
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

  private readStoredItems(): CartItem[] {
    try {
      if (typeof localStorage === 'undefined') {
        return [];
      }

      const storedValue = localStorage.getItem(this.storageKey);

      if (!storedValue) {
        return [];
      }

      const storedItems = JSON.parse(storedValue) as StoredCartItem[];

      if (!Array.isArray(storedItems)) {
        return [];
      }

      return storedItems
        .map((item) => {
          const product = PRODUCTS.find((product) => product.id === Number(item.productId));
          const quantity = Math.max(1, Math.floor(Number(item.quantity) || 1));

          if (!product) {
            return null;
          }

          return {
            product,
            quantity,
          };
        })
        .filter((item): item is CartItem => item !== null);
    } catch {
      return [];
    }
  }

  private saveItems(items: CartItem[]): void {
    try {
      if (typeof localStorage === 'undefined') {
        return;
      }

      if (items.length === 0) {
        localStorage.removeItem(this.storageKey);
        return;
      }

      const storedItems: StoredCartItem[] = items.map((item) => ({
        productId: item.product.id,
        quantity: item.quantity,
      }));

      localStorage.setItem(this.storageKey, JSON.stringify(storedItems));
    } catch {
      return;
    }
  }
}
