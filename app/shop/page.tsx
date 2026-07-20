import { api } from "@/components/lib/api";
import ShopSeraphe from "@/components/shop";
import React from "react";

export default async function ShopPage() {
  const products = await api.publicShop.getProducts();
  return (
    <div>
      <ShopSeraphe products={products} />
    </div>
  );
}
