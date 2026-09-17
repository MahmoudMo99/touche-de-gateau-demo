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

import { STORE_INFO } from '../../../core/data/store-info.data';

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
  readonly storeInfo = STORE_INFO;
}
