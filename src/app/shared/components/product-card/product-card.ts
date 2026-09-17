import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  input,
  output,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideCheck, LucideEye, LucidePackage, LucidePlus, LucideSparkles } from '@lucide/angular';
import { HotToastService } from '@ngxpert/hot-toast';

import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-product-card',
  imports: [RouterLink, LucideCheck, LucideEye, LucidePackage, LucidePlus, LucideSparkles],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCard {
  private readonly destroyRef = inject(DestroyRef);
  private readonly toastService = inject(HotToastService);
  private addedTimer?: ReturnType<typeof setTimeout>;

  readonly product = input.required<Product>();
  readonly addToCart = output<Product>();

  readonly added = signal(false);

  constructor() {
    this.destroyRef.onDestroy(() => {
      if (this.addedTimer) {
        clearTimeout(this.addedTimer);
      }
    });
  }

  onAddToCart(): void {
    const product = this.product();

    this.addToCart.emit(product);
    this.added.set(true);

    this.toastService.success(`تمت إضافة ${product.nameAr} إلى السلة`);

    if (this.addedTimer) {
      clearTimeout(this.addedTimer);
    }

    this.addedTimer = setTimeout(() => {
      this.added.set(false);
    }, 900);
  }
}
