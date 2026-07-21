import React from "react";
import About from "../../components/about";
import { api } from "@/components/lib/api";

export default async function AboutPage() {
  const teams = await api.publicShop.getTeam();
  return (
    <div>
      <About teams={teams} />
    </div>
  );
}
