"use client";

import { Category, TeamGrouped, TrendsFocus } from "../types/api";
import SiteContext from "./siteContext";

export function SiteProvider({
  children,
  categories,
  trendFocusAreas,
  teamGrouped,
}: {
  children: React.ReactNode;
  categories: Category[];
  trendFocusAreas: TrendsFocus[];
  teamGrouped: TeamGrouped[];
}) {
  return (
    <SiteContext.Provider
      value={{
        categories,
        trendFocusAreas,
        teamGrouped,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
}
