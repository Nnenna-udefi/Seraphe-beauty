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
  images: string[];
  discountPrice?: number;
  tags?: string[];
  isFeatured?: boolean;
  isActive?: boolean;
  stock: number;
  sku?: string;
}

export interface Lifestyle {
  _id: string;
  title: string;
  slug: string;
  category: string;
  categorySlug: string;
  excerpt: string;
  content: string;
  author: string;
  readTimeMinutes: number;
  images: string;
  tags: string[];
  isFeatured: boolean;
  order: number;
  createdAt: string;
  updatedAt: string;
}

export interface Tips {
  _id: string;
  title: string;
  slug: string;
  category: string;
  categorySlug: string;
  level: string;
  summary: string;
  content: string;
  author: string;
  readTimeMinutes: number;
  images: string;
  tags: string[];
  order: number;
  createdAt: string;
  updatedAt: string;
}

export interface Review {
  _id: string;
  product: string;
  rating: number;
  email: string;
  name: string;
  reviewText: string;
  createdAt: string;
  updatedAt: string;
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
  images: string[];
  discountPrice?: number;
  tags?: string[];
  isFeatured?: boolean;
  isActive?: boolean;
  stock: number;
  sku?: string;
}

export interface LifestylePayload {
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  content: string;
  author: string;
  readTimeMinutes: number;
  images: string;
  tags: string[];
  isFeatured: boolean;
  order: number;
}

export interface TipsPayload {
  title: string;
  slug: string;
  category: string;
  level: string;
  summary: string;
  content: string;
  author: string;
  readTimeMinutes: number;
  images: string;
  tags: string[];
  order: number;
}

export interface ReviewPayload {
  product: string;
  rating: number;
  email: string;
  reviewText: string;
  name: string;
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

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
  meta?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}
