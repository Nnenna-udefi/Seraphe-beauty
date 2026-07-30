import React from "react";
import Models from "../../components/models";
import { api } from "@/components/lib/api";
export const dynamic = "force-dynamic";

export default async function ModelsPage() {
  const model = await api.publicShop.getModel();

  return (
    <div>
      <Models models={model} />
    </div>
  );
}
