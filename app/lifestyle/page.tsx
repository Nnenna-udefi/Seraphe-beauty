import LifestyleAdmin from "@/components/lifestyle";
import { api } from "@/components/lib/api";

export default async function LifestylePage() {
  const [lifestyle, categories] = await Promise.all([
    api.publicShop.getLifestyle(),
    api.publicShop.getLifestyleByCategories(),
  ]);
  return (
    <div>
      <LifestyleAdmin lifestyle={lifestyle} categories={categories} />
    </div>
  );
}
