"use client";

import {
  Category,
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
}: {
  children: React.ReactNode;
  categories: Category[];
  trendFocusAreas: TrendsFocus[];
  teamGrouped: TeamGrouped[];
  products: Product[];
  trends: Trends[];
  tips: Tips[];
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
      }}
    >
      {children}
    </SiteContext.Provider>
  );
}
