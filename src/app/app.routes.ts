import { Routes } from '@angular/router';

import { STORE_INFO } from './core/data/store-info.data';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/pages/home/home').then((m) => m.Home),
    title: `${STORE_INFO.brand.demoName} | متجر حلويات عربي`,
    data: {
      description: STORE_INFO.seo.homeDescription,
    },
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./features/products/pages/products/products').then((m) => m.Products),
    title: `المنتجات | ${STORE_INFO.brand.demoName}`,
    data: {
      description: STORE_INFO.seo.productsDescription,
    },
  },
  {
    path: 'products/:id',
    loadComponent: () =>
      import('./features/product-details/pages/product-details/product-details').then(
        (m) => m.ProductDetails,
      ),
    title: `تفاصيل المنتج | ${STORE_INFO.brand.demoName}`,
    data: {
      description: STORE_INFO.seo.productDetailsDescription,
    },
  },
  {
    path: 'cart',
    loadComponent: () => import('./features/cart/pages/cart/cart').then((m) => m.Cart),
    title: `سلة المشتريات | ${STORE_INFO.brand.demoName}`,
    data: {
      description: STORE_INFO.seo.cartDescription,
    },
  },
  {
    path: 'checkout',
    loadComponent: () =>
      import('./features/checkout/pages/checkout/checkout').then((m) => m.Checkout),
    title: `إتمام الطلب | ${STORE_INFO.brand.demoName}`,
    data: {
      description: STORE_INFO.seo.checkoutDescription,
    },
  },
  {
    path: '**',
    redirectTo: '',
  },
];
