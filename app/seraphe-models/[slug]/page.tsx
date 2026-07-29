import Image from "next/image";
import { H1 } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import Reviews from "@/components/reviews";
import { api } from "@/components/lib/api";
import { Star } from "lucide-react";
import Breadcrumb from "@/components/ui/breadCrumbs";

export default async function ModelsDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;


  let model;

  try {
    const response = await api.publicShop.getModelBySlug(slug);

    model = response;

  } catch {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Model details not found.</p>
      </div>
    );
  }

  return (
    <div className="py-10 md:px-12 min-h-screen md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Model", href: "/seraphe-models" },

            { label: model.name },
          ]}
        />
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full">
            <Image
              src={model.featureImage}
              alt={model.name}
              width={500}
              height={500}
              className="w-full"
            />
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="uppercase text-yellowText text-sm">
              {model.specialty}
            </h3>

            <H1>{model.name}</H1>
         
           <p>{model.height}</p>
             <div className="flex flex-wrap gap-2 mt-10">
                {model.hobbies.map((hobbie) => (
                  <span
                    key={hobbie}
                    className="rounded-full bg-boxBg px-3 py-1 text-sm"
                  >
                    {hobbie}
                  </span>
                ))}
              </div>

<div className="prose prose-neutral max-w-none">
    {model.bio}
</div>

  <div className="flex gap-2 flex-wrap">
                {model.images.map((image, index) => (
                  <Image
                    key={image || index}
                    src={image}
                    alt={model.name}
                    width={1200}
                    height={400}
                    className="w-full object-cover"
                  />
                ))}
              </div>
           

       
          </div>
        </div>

        
      </div>
    </div>
  );
}
