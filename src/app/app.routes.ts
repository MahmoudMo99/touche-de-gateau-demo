import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/pages/home/home').then((m) => m.Home),
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./features/products/pages/products/products').then((m) => m.Products),
  },
  {
    path: 'products/:id',
    loadComponent: () =>
      import('./features/product-details/pages/product-details/product-details').then(
        (m) => m.ProductDetails,
      ),
  },
  {
    path: 'cart',
    loadComponent: () => import('./features/cart/pages/cart/cart').then((m) => m.Cart),
  },
  {
    path: 'checkout',
    loadComponent: () =>
      import('./features/checkout/pages/checkout/checkout').then((m) => m.Checkout),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
