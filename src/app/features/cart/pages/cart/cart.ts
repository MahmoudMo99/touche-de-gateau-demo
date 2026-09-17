import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  LucideArrowLeft,
  LucideBadgeCheck,
  LucideClipboardList,
  LucideMinus,
  LucidePackage,
  LucidePlus,
  LucideRotateCcw,
  LucideShoppingCart,
  LucideSparkles,
  LucideTrash2,
  LucideTruck,
} from '@lucide/angular';
import { HotToastService } from '@ngxpert/hot-toast';

import { CartService } from '../../../../core/services/cart.service';

@Component({
  selector: 'app-cart',
  imports: [
    RouterLink,
    LucideArrowLeft,
    LucideBadgeCheck,
    LucideClipboardList,
    LucideMinus,
    LucidePackage,
    LucidePlus,
    LucideRotateCcw,
    LucideShoppingCart,
    LucideSparkles,
    LucideTrash2,
    LucideTruck,
  ],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Cart {
  private readonly toastService = inject(HotToastService);

  readonly cartService = inject(CartService);

  increaseQuantity(productId: number): void {
    this.cartService.increaseQuantity(productId);
  }

  decreaseQuantity(productId: number): void {
    this.cartService.decreaseQuantity(productId);
  }

  removeProduct(productId: number): void {
    const item = this.cartService.items().find((item) => item.product.id === productId);

    this.cartService.removeProduct(productId);

    if (item) {
      this.toastService.info(`تم حذف ${item.product.nameAr} من السلة`);
    }
  }

  clearCart(): void {
    if (this.cartService.items().length === 0) {
      return;
    }

    this.cartService.clearCart();
    this.toastService.info('تم تفريغ السلة');
  }
}
