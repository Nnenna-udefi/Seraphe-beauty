import {
  AuthResponse,
  Category,
  CategoryPayload,
  Product,
  ProductPayload,
  PublicShopOverview,
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
      apiRequest<PublicShopOverview>("/api/shop"),

    getCategories: (): Promise<Category[]> =>
      apiRequest<Category[]>("/api/shop/categories"),

    getProducts: (): Promise<Product[]> =>
      apiRequest<Product[]>("/api/shop/products"),

    getProductBySlug: (slug: string): Promise<Product> =>
      apiRequest<Product>(`/api/shop/products/${slug}`),
  },

  // ADMIN DASHBOARD ENDPOINTS
  adminShop: {
    // Categories Management
    getCategories: (): Promise<Category[]> =>
      apiRequest<Category[]>("/api/admin/shop/categories"),

    createCategory: (data: CategoryPayload): Promise<Category> =>
      apiRequest<Category>("/api/admin/shop/categories", {
        method: "POST",
        body: JSON.stringify(data),
      }),

    updateCategory: (
      id: string | number,
      data: CategoryPayload,
    ): Promise<Category> =>
      apiRequest<Category>(`/api/admin/shop/categories/${id}`, {
        method: "PUT",
        body: JSON.stringify(data),
      }),

    deleteCategory: (
      id: string | number,
    ): Promise<{ success: boolean; message: string }> =>
      apiRequest<{ success: boolean; message: string }>(
        `/api/admin/shop/categories/${id}`,
        { method: "DELETE" },
      ),

    // Products Management
    getProducts: (): Promise<Product[]> =>
      apiRequest<Product[]>("/api/admin/shop/products"),

    createProduct: (data: ProductPayload): Promise<Product> =>
      apiRequest<Product>("/api/admin/shop/products", {
        method: "POST",
        body: JSON.stringify(data),
      }),

    updateProduct: (
      id: string | number,
      data: Partial<ProductPayload>,
    ): Promise<Product> =>
      apiRequest<Product>(`/api/admin/shop/product/${id}`, {
        method: "PUT",
        body: JSON.stringify(data),
      }),

    deleteProduct: (
      id: string | number,
    ): Promise<{ success: boolean; message: string }> =>
      apiRequest<{ success: boolean; message: string }>(
        `/api/admin/shop/product/${id}`,
        { method: "DELETE" },
      ),
  },
};
