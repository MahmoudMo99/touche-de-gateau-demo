import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {
  LucideArrowLeft,
  LucideBanknote,
  LucideCheck,
  LucideClipboardList,
  LucideCreditCard,
  LucideHome,
  LucideMapPin,
  LucideShoppingBag,
  LucideShoppingCart,
  LucideSparkles,
  LucideTruck,
  LucideUser,
} from '@lucide/angular';
import { HotToastService } from '@ngxpert/hot-toast';

import { CartService } from '../../../../core/services/cart.service';

@Component({
  selector: 'app-checkout',
  imports: [
    ReactiveFormsModule,
    RouterLink,
    LucideArrowLeft,
    LucideBanknote,
    LucideCheck,
    LucideClipboardList,
    LucideCreditCard,
    LucideHome,
    LucideMapPin,
    LucideShoppingBag,
    LucideShoppingCart,
    LucideSparkles,
    LucideTruck,
    LucideUser,
  ],
  templateUrl: './checkout.html',
  styleUrl: './checkout.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Checkout {
  private readonly fb = inject(FormBuilder);
  private readonly document = inject(DOCUMENT);
  private readonly toastService = inject(HotToastService);

  readonly cartService = inject(CartService);

  readonly orderSubmitted = signal(false);
  readonly orderNumber = signal('');

  readonly checkoutForm = this.fb.nonNullable.group({
    fullName: ['', [Validators.required, Validators.minLength(3)]],
    phone: ['', [Validators.required, Validators.pattern(/^(\+9665\d{8}|05\d{8})$/)]],
    city: ['', Validators.required],
    address: ['', [Validators.required, Validators.minLength(8)]],
    notes: [''],
    paymentMethod: ['cash', Validators.required],
  });

  submitOrder(): void {
    this.checkoutForm.markAllAsTouched();
    this.checkoutForm.updateValueAndValidity();

    if (this.checkoutForm.invalid) {
      this.toastService.error('يرجى مراجعة البيانات المطلوبة قبل تأكيد الطلب');
      this.focusFirstInvalidControl();
      return;
    }

    if (this.cartService.items().length === 0) {
      this.toastService.error('السلة فارغة، أضف منتجات أولًا');
      return;
    }

    this.orderNumber.set(this.generateOrderNumber());
    this.cartService.clearCart();
    this.orderSubmitted.set(true);
    this.toastService.success('تم تسجيل الطلب التجريبي بنجاح');
    this.scrollToTop();
  }

  private generateOrderNumber(): string {
    const randomPart = Math.floor(1000 + Math.random() * 9000);

    return `#TDG-${randomPart}`;
  }

  private focusFirstInvalidControl(): void {
    setTimeout(() => {
      const firstInvalidElement = this.document.querySelector<HTMLElement>(
        '.checkout-form .ng-invalid',
      );

      firstInvalidElement?.focus();
      firstInvalidElement?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    });
  }

  private scrollToTop(): void {
    setTimeout(() => {
      this.document.defaultView?.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  }
}
