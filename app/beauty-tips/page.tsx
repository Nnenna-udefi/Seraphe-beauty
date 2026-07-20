import { api } from "@/components/lib/api";
import TipsPage from "@/components/tips";

export default async function BeautyTipsPage() {
  const [tips, categories] = await Promise.all([
    api.publicShop.getBeautyTips(),
    api.publicShop.getBeautyTipsByCategories(),
  ]);

  return <TipsPage tips={tips} categories={categories} />;
}
