import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import {
  LucideArrowLeft,
  LucideBadgeCheck,
  LucideCakeSlice,
  LucideCheck,
  LucideHome,
  LucideInfo,
  LucideMinus,
  LucidePackage,
  LucidePlus,
  LucideShoppingCart,
  LucideSparkles,
} from '@lucide/angular';
import { HotToastService } from '@ngxpert/hot-toast';

import { PRODUCTS } from '../../../../core/data/products.data';
import { Product } from '../../../../core/models/product.model';
import { CartService } from '../../../../core/services/cart.service';
import { ProductCard } from '../../../../shared/components/product-card/product-card';

@Component({
  selector: 'app-product-details',
  imports: [
    RouterLink,
    ProductCard,
    LucideArrowLeft,
    LucideBadgeCheck,
    LucideCakeSlice,
    LucideCheck,
    LucideHome,
    LucideInfo,
    LucideMinus,
    LucidePackage,
    LucidePlus,
    LucideShoppingCart,
    LucideSparkles,
  ],
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetails {
  private readonly route = inject(ActivatedRoute);
  private readonly cartService = inject(CartService);
  private readonly toastService = inject(HotToastService);
  private readonly destroyRef = inject(DestroyRef);

  private addedTimer?: ReturnType<typeof setTimeout>;

  private readonly params = toSignal(this.route.paramMap, {
    initialValue: this.route.snapshot.paramMap,
  });

  readonly quantity = signal(1);
  readonly added = signal(false);

  readonly productId = computed(() => Number(this.params().get('id')));

  readonly product = computed(() => {
    return PRODUCTS.find((product) => product.id === this.productId());
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

  constructor() {
    effect(() => {
      this.productId();
      this.quantity.set(1);
      this.added.set(false);
    });

    this.destroyRef.onDestroy(() => {
      if (this.addedTimer) {
        clearTimeout(this.addedTimer);
      }
    });
  }

  increaseQuantity(): void {
    this.quantity.update((quantity) => quantity + 1);
  }

  decreaseQuantity(): void {
    this.quantity.update((quantity) => Math.max(1, quantity - 1));
  }

  addToCart(): void {
    const product = this.product();
    const quantity = this.quantity();

    if (!product) {
      return;
    }

    this.cartService.addProduct(product, quantity);
    this.added.set(true);

    this.toastService.success(`تمت إضافة ${quantity} × ${product.nameAr} إلى السلة`);

    if (this.addedTimer) {
      clearTimeout(this.addedTimer);
    }

    this.addedTimer = setTimeout(() => {
      this.added.set(false);
    }, 1200);
  }

  addRelatedProduct(product: Product): void {
    this.cartService.addProduct(product);
  }
}
