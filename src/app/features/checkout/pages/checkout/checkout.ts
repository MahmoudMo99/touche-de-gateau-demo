import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { CartService } from '../../../../core/services/cart.service';

@Component({
  selector: 'app-checkout',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './checkout.html',
  styleUrl: './checkout.scss',
})
export class Checkout {
  private readonly fb = inject(FormBuilder);

  readonly cartService = inject(CartService);

  readonly orderSubmitted = signal(false);

  readonly checkoutForm = this.fb.nonNullable.group({
    fullName: ['', [Validators.required, Validators.minLength(3)]],

    phone: ['', [Validators.required, Validators.pattern(/^\+9665\d{8}$/)]],

    city: ['', Validators.required],

    address: ['', [Validators.required, Validators.minLength(8)]],

    notes: [''],

    paymentMethod: ['cash', Validators.required],
  });

  submitOrder(): void {
    if (this.checkoutForm.invalid) {
      this.checkoutForm.markAllAsTouched();
      return;
    }

    if (this.cartService.items().length === 0) {
      return;
    }

    console.log({
      customer: this.checkoutForm.getRawValue(),
      items: this.cartService.items(),
      total: this.cartService.totalPrice(),
    });

    this.cartService.clearCart();

    this.orderSubmitted.set(true);
  }
}
