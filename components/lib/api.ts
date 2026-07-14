import {
  AuthResponse,
  Category,
  CategoryPayload,
  Lifestyle,
  LifestylePayload,
  Product,
  ProductPayload,
  PublicShopOverview,
  Review,
  ReviewPayload,
  Tips,
  TipsPayload,
} from "../types/api";
import { apiRequest } from "./apiClient";

export const api = {
  // AUTH ENDPOINTS
  auth: {
    adminSignup: (data: Record<string, string>): Promise<AuthResponse> =>
      apiRequest<AuthResponse>("/auth/admin/signup", {
        method: "POST",
        body: JSON.stringify(data),
      }),

    adminSignin: (data: Record<string, string>): Promise<AuthResponse> =>
      apiRequest<AuthResponse>("/auth/admin/signin", {
        method: "POST",
        body: JSON.stringify(data),
      }),
  },

  // PUBLIC SHOP ENDPOINTS
  publicShop: {
    getOverview: (): Promise<PublicShopOverview> =>
      apiRequest<PublicShopOverview>("/shop"),

    getCategories: (): Promise<Category[]> =>
      apiRequest<Category[]>("/shop/categories"),

    getProducts: (): Promise<Product[]> =>
      apiRequest<Product[]>("/shop/products"),

    getProductBySlug: (slug: string): Promise<Product> =>
      apiRequest<Product>(`/shop/products/${slug}`),

    getProductReviewsBySlug: (slug: string): Promise<Review> =>
      apiRequest<Review>(`/shop/products/${slug}/reviews`),

    postProductReviewsBySlug: (slug: string): Promise<ReviewPayload> =>
      apiRequest<ReviewPayload>(`/shop/products/${slug}/reviews`),

    getBeautyTips: (): Promise<Tips[]> =>
      apiRequest<Tips[]>("/shop/beauty-tips"),

    getBeautyTipsByCategories: (): Promise<Tips[]> =>
      apiRequest<Tips[]>("/shop/beauty-tips/categories"),

    getBeautyTipsBySlug: (slug: string): Promise<Tips> =>
      apiRequest<Tips>(`/shop/beauty-tips/${slug}`),

    getLifestyle: (): Promise<Lifestyle[]> =>
      apiRequest<Lifestyle[]>("/shop/lifestyle"),

    getLifestyleByCategories: (): Promise<Lifestyle[]> =>
      apiRequest<Lifestyle[]>("/shop/lifestyle/categories"),

    getLifestyleBySlug: (slug: string): Promise<Lifestyle> =>
      apiRequest<Lifestyle>(`/shop/lifestyle/${slug}`),
  },

  // ADMIN DASHBOARD ENDPOINTS
  adminShop: {
    // Categories Management
    getCategories: (): Promise<Category[]> =>
      apiRequest<Category[]>("/admin/shop/categories"),

    createCategory: (data: CategoryPayload): Promise<Category> =>
      apiRequest<Category>("/admin/shop/categories", {
        method: "POST",
        body: JSON.stringify(data),
      }),

    updateCategory: (
      id: string | number,
      data: CategoryPayload,
    ): Promise<Category> =>
      apiRequest<Category>(`/admin/shop/categories/${id}`, {
        method: "PATCH",
        body: JSON.stringify(data),
      }),

    deleteCategory: (
      id: string | number,
    ): Promise<{ success: boolean; message: string }> =>
      apiRequest<{ success: boolean; message: string }>(
        `/admin/shop/categories/${id}`,
        { method: "DELETE" },
      ),

    // Products Management
    getProducts: (): Promise<Product[]> =>
      apiRequest<Product[]>("/admin/shop/products"),

    createProduct: (data: ProductPayload): Promise<Product> =>
      apiRequest<Product>("/admin/shop/products", {
        method: "POST",
        body: JSON.stringify(data),
      }),

    updateProduct: (
      id: string | number,
      data: Partial<ProductPayload>,
    ): Promise<Product> =>
      apiRequest<Product>(`/admin/shop/products/${id}`, {
        method: "PATCH",
        body: JSON.stringify(data),
      }),

    deleteProduct: (
      id: string | number,
    ): Promise<{ success: boolean; message: string }> =>
      apiRequest<{ success: boolean; message: string }>(
        `/admin/shop/products/${id}`,
        { method: "DELETE" },
      ),

    // Lifestyle Management
    getLifestyle: (): Promise<Lifestyle[]> =>
      apiRequest<Lifestyle[]>("/admin/lifestyle"),

    createLifestyle: (data: LifestylePayload): Promise<Lifestyle> =>
      apiRequest<Lifestyle>("/admin/lifestyle", {
        method: "POST",
        body: JSON.stringify(data),
      }),

    updateLifestyle: (
      id: string | number,
      data: Partial<LifestylePayload>,
    ): Promise<Lifestyle> =>
      apiRequest<Lifestyle>(`/admin/lifestyle/${id}`, {
        method: "PATCH",
        body: JSON.stringify(data),
      }),

    deleteLifestyle: (
      id: string | number,
    ): Promise<{ success: boolean; message: string }> =>
      apiRequest<{ success: boolean; message: string }>(
        `/admin/lifestyle/${id}`,
        { method: "DELETE" },
      ),

    // Beauty-Tips Management
    getTips: (): Promise<Tips[]> => apiRequest<Tips[]>("/admin/beauty-tips"),

    createTips: (data: TipsPayload): Promise<Tips> =>
      apiRequest<Tips>("/admin/beauty-tips", {
        method: "POST",
        body: JSON.stringify(data),
      }),

    updateTips: (
      id: string | number,
      data: Partial<TipsPayload>,
    ): Promise<Tips> =>
      apiRequest<Tips>(`/admin/beauty-tips/${id}`, {
        method: "PATCH",
        body: JSON.stringify(data),
      }),

    deleteTips: (
      id: string | number,
    ): Promise<{ success: boolean; message: string }> =>
      apiRequest<{ success: boolean; message: string }>(
        `/admin/beauty-tips/${id}`,
        { method: "DELETE" },
      ),

    // reviews

    getProductReviews: (): Promise<Review[]> =>
      apiRequest<Review[]>("/admin/shop/reviews"),
  },
};
