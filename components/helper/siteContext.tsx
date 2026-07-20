"use client";

import { createContext, useContext } from "react";

import { Category, TeamGrouped, TrendsFocus } from "@/components/types/api";

type SiteContextType = {
  categories: Category[];
  trendFocusAreas: TrendsFocus[];
  teamGrouped: TeamGrouped[];
};

const SiteContext = createContext<SiteContextType | null>(null);

export function useSite() {
  const context = useContext(SiteContext);

  if (!context) throw new Error("useSite must be inside SiteProvider");

  return context;
}

export default SiteContext;
