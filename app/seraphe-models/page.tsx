import React from "react";
import Models from "../../components/models";
import { api } from "@/components/lib/api";

export default async function ModelsPage() {
  const model = await api.publicShop.getModel();
  console.log(model)
  return (
    <div>
      <Models models={model} />
    </div>
  );
}
