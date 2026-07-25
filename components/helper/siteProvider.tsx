"use client";

import {
  Category,
  Lifestyle,
  Product,
  TeamGrouped,
  Tips,
  Trends,
  TrendsFocus,
} from "../types/api";
import SiteContext from "./siteContext";

export function SiteProvider({
  children,
  categories,
  trendFocusAreas,
  teamGrouped,
  products,
  trends,
  tips,
  lifestyle,
}: {
  children: React.ReactNode;
  categories: Category[];
  trendFocusAreas: TrendsFocus[];
  teamGrouped: TeamGrouped[];
  products: Product[];
  trends: Trends[];
  tips: Tips[];
  lifestyle: Lifestyle[];
}) {
  return (
    <SiteContext.Provider
      value={{
        categories,
        trendFocusAreas,
        teamGrouped,
        products,
        trends,
        tips,
        lifestyle,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
}
