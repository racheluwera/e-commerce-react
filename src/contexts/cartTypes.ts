export type Product = {
  id: number;
  sku?: string;
  name: string;
  price: string;
  originalPrice?: string;
  img: string;
  images?: string[];
  description?: string;
  category?: string;
  brand?: string;
  material?: string;
  dimensions?: string;
  weight?: string;
  colors?: string[];
  stock?: number;
  rating?: number;
  reviews?: number;
  createdAt?: string;
  updatedAt?: string;
};

export type CartItem = Product & { quantity: number };

export type CartContextType = {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (id: number) => void;
  total: number;
};
