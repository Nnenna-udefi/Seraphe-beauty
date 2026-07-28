export type HomeBlog = {
  id: string;
  slug: string;
  title: string;
  author: string;
  createdAt: string;
  image: string;
  category: string;
  type: "tips" | "trends" | "lifestyle";
};
export interface Category {
  _id: string;
  name: string;
  slug: string;
  description?: string;
  isActive?: boolean;
  order?: number;
  image?: string;
}

// export interface ProductResponse {
//   product: Product;
//   relatedProducts: Product[];
// }

export interface Product {
  _id: string;
  name: string;
  slug: string;
  price: number;
  category: Category;
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
  image: string;
  tags: string[];
  isFeatured: boolean;
  order: number;
  createdAt: string;
  updatedAt: string;
}

export interface LifestyleCategory {
  name: string;
  slug: string;
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
  image: string;
  tags: string[];
  order: number;
  createdAt: string;
  updatedAt: string;
}

export interface TipsCategory {
  name: string;
  slug: string;
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

export interface CreateSubscriberRequest {
  email: string;
  name: string;
}

export interface Subscribers {
  _id: string;
  name: string;
  email: string;
  subscribedAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface Model {
  _id: string;
  name: string;
  slug: string;
  specialty: string;
  height: string;
  bio: string;
  hobbies: string[];
  featureImage: string;
  images: string[];
  order: number;
  createdAt: string;
  updatedAt: string;
}

export interface Team {
  _id: string;
  name: string;
  role: string;
  section: string;
  sectionSlug: string;
  image: string;
  linkedin?: string;
  email?: string;
  bio?: string;
  instagram?: string;
  order: number;
  createdAt: string;
  updatedAt: string;
}
export interface TeamGrouped {
  name: string;
  slug: string;
  members: Team[];
}

export interface TeamSections {
  name: string;
  slug: string;
}

export interface TrendsFocus {
  name: string;
  slug: string;
}

export interface ModelsCategory {
  name: string;
  slug: string;
}
export interface Trends {
  _id: string;
  title: string;
  slug: string;
  focusArea: string;
  focusAreaSlug: string;
  label: string;
  subtitle: string;
  excerpt: string;
  content: string;
  author: string;
  featureImage: string;
  images: string[];
  hashtags: string[];
  readTimeMinutes: number;
  isFeatured: boolean;
  order: number;
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
  image: string;
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
  image: string;
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

export interface ModelPayload {
  name: string;
  slug: string;
  specialty: string;
  height: string;
  bio: string;
  hobbies: string[];
  featureImage: string;
  images: string[];
}

export interface TeamPayload {
  name: string;
  role: string;
  section: string;
  image: string;
  linkedin?: string;
  email?: string;
  bio?: string;
  instagram?: string;
  order: number;
}

export interface TrendsPayload {
  title: string;
  focusArea: string;
  label: string;
  subtitle: string;
  excerpt: string;
  content: string;
  author: string;
  featureImage: string;
  images: string[];
  hashtags: string[];
  readTimeMinutes: number;
  isFeatured: boolean;
  order: number;
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
