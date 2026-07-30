import { api } from "@/components/lib/api";
import TrendsPage from "../../components/trends";
export const dynamic = "force-dynamic";

export default async function TrendMain() {
  const [trends, focusAreas] = await Promise.all([
    api.publicShop.getTrends(),
    api.publicShop.getTrendsByFocusAreas(),
  ]);

  return (
    <div>
      <TrendsPage trends={trends} focusAreas={focusAreas} />
    </div>
  );
}
