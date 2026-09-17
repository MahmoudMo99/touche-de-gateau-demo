import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/pages/home/home').then((m) => m.Home),
    title: 'Touché de Gateau Demo | متجر حلويات عربي',
    data: {
      description:
        'متجر حلويات عربي تجريبي لعرض الكيك والحلويات، تصفح المنتجات، السلة، وتجربة إتمام الطلب بواجهة RTL متجاوبة.',
    },
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./features/products/pages/products/products').then((m) => m.Products),
    title: 'المنتجات | Touché de Gateau Demo',
    data: {
      description:
        'تصفح تشكيلة Touché de Gateau من الكيك، التشيز كيك، الميني كيك، وقطع الحلوى المناسبة للمناسبات والضيافة.',
    },
  },
  {
    path: 'products/:id',
    loadComponent: () =>
      import('./features/product-details/pages/product-details/product-details').then(
        (m) => m.ProductDetails,
      ),
    title: 'تفاصيل المنتج | Touché de Gateau Demo',
    data: {
      description:
        'اعرض تفاصيل المنتج، السعر، الوصف، الكمية، وأضف المنتج إلى السلة داخل تجربة متجر حلويات عربية.',
    },
  },
  {
    path: 'cart',
    loadComponent: () => import('./features/cart/pages/cart/cart').then((m) => m.Cart),
    title: 'سلة المشتريات | Touché de Gateau Demo',
    data: {
      description:
        'راجع المنتجات المضافة إلى السلة، عدل الكميات، واحسب الإجمالي المبدئي قبل إتمام الطلب.',
    },
  },
  {
    path: 'checkout',
    loadComponent: () =>
      import('./features/checkout/pages/checkout/checkout').then((m) => m.Checkout),
    title: 'إتمام الطلب | Touché de Gateau Demo',
    data: {
      description:
        'واجهة إتمام طلب تجريبية تشمل بيانات العميل، عنوان التوصيل، ملاحظات الطلب، وطريقة الدفع.',
    },
  },
  {
    path: '**',
    redirectTo: '',
  },
];
