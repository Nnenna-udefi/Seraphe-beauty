export interface Category {
  _id: string;
  name: string;
  slug?: string;
  description?: string;
  isActive?: boolean;
  order?: number;
  image?: string;
}

export interface Product {
  _id: string;
  name: string;
  slug: string;
  price: number;
  category: string;
  shortDescription: string;
  description: string;
  images: string;
  discountPrice?: number;
  tags?: string[];
  isFeatured?: boolean;
  isActive?: boolean;
  stock: number;
  sku?: string;
}

// --- API Request Payloads (What your forms send) ---
export interface CategoryPayload {
  name: string;
  description?: string;
  isActive?: boolean;
  order?: number;
  image?: string;
}

export interface ProductPayload {
  name: string;
  slug: string;
  price: number;
  category: string;
  shortDescription: string;
  description: string;
  images: string;
  discountPrice?: number;
  tags?: string[];
  isFeatured?: boolean;
  isActive?: boolean;
  stock: number;
  sku?: string;
}

// --- API Response Wrappers ---
export interface AuthResponse {
  accessToken: string;
  admin: {
    _id: string;
    email: string;
    name: string;
  };
}

export interface PublicShopOverview {
  featuredProducts: Product[];
  bannerImages: string[];
  totalCount: number;
}
