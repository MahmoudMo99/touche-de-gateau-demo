export interface Product {
  id: number;
  code: string;

  nameAr: string;
  nameEn: string;

  category: string;
  description: string;

  image: string;

  price: number;
  isDemoPrice?: boolean;

  featured?: boolean;
}
