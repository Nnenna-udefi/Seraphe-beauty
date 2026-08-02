import { Product } from "../types/api";

// 1. Define the dictionary return type
type GroupedProducts = Record<string, Product[]>;

// Helper function to get top/latest N products per category
export function getLatestProductsPerCategory(
  allProducts: Product[],
  limitPerCategory = 4,
): GroupedProducts {
  // Explicitly annotate 'grouped' with Record<string, Product[]>
  const grouped: GroupedProducts = {};

  allProducts.forEach((product) => {
    // Ensure 'catKey' is strictly a string (handles string or object category)
    const catKey: string =
      typeof product.category === "object" && product.category !== null
        ? product.category.slug
        : String(product.category);

    if (!catKey) return;

    if (!grouped[catKey]) {
      grouped[catKey] = [];
    }

    // Only keep up to the limit for each category
    if (grouped[catKey].length < limitPerCategory) {
      grouped[catKey].push(product);
    }
  });

  return grouped;
}
