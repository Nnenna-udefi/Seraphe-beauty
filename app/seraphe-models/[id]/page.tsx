import Image from "next/image";
import { H1 } from "@/components/ui/heading";
import { api } from "@/components/lib/api";
import Breadcrumb from "@/components/ui/breadCrumbs";

export default async function ModelsDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  let model;

  try {
    model = await api.publicShop.getModelById(id);
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
            { label: "Models", href: "/seraphe-models" },
            { label: model.name },
          ]}
        />

        <div className="flex flex-col md:flex-row gap-6">
          {/* Featured Image */}
          <div className="w-full md:w-1/2">
            <Image
              src={model.featureImage}
              alt={model.name}
              width={500}
              height={500}
              className="w-full object-cover"
            />
          </div>

          {/* Model Information */}
          <div className="flex flex-col gap-5 md:w-1/2">
            <h3 className="uppercase text-yellowText text-sm">
              {model.specialty}
            </h3>

            <H1>{model.name}</H1>

            <p>Height: {model.height}</p>

            {/* Hobbies */}
            <h3>Hobbies:</h3>
            <div className="flex flex-wrap gap-2 mt-5">
              {model.hobbies.map((hobby: string) => (
                <span
                  key={hobby}
                  className="rounded-full first-letter-cap bg-boxBg px-3 py-1 text-sm"
                >
                  {hobby}
                </span>
              ))}
            </div>

            {/* Bio */}
            <div className="prose prose-neutral max-w-none">
              <p>{model.bio}</p>
            </div>
          </div>
        </div>

        {/* Additional Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
          {model.images.map((image: string, index: number) => (
            <Image
              key={image || index}
              src={image}
              alt={`${model.name} - image ${index + 1}`}
              width={800}
              height={600}
              className="w-full object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  );
}