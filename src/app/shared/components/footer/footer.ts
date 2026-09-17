import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  LucideCakeSlice,
  LucideHome,
  LucideInfo,
  LucideMail,
  LucidePackage,
  LucidePhone,
  LucideShoppingCart,
} from '@lucide/angular';

@Component({
  selector: 'app-footer',
  imports: [
    RouterLink,
    LucideCakeSlice,
    LucideHome,
    LucideInfo,
    LucideMail,
    LucidePackage,
    LucidePhone,
    LucideShoppingCart,
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  readonly currentYear = new Date().getFullYear();

  readonly phoneDisplay = '+966 50 000 0000';
  readonly phoneLink = 'tel:+966500000000';
  readonly email = 'demo@touche-demo.com';
}
