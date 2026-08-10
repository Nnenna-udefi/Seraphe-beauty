import Image from "next/image";
import Link from "next/link";
import { H1 } from "@/components/ui/heading";
import { api } from "@/components/lib/api";
import Breadcrumb from "@/components/ui/breadCrumbs";
import { ArrowLeft, Sparkles, Ruler, Heart } from "lucide-react";

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
      <div className="min-h-[70vh] flex flex-col items-center justify-center gap-4 text-center px-4">
        <div className="p-4 rounded-full bg-amber-50 text-amber-700">
          <Sparkles className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-serif font-bold text-gray-900">
          Model Profile Not Found
        </h2>
        <p className="text-gray-500 text-sm max-w-md">
          The requested model profile couldn&apos;t be retrieved or may have
          been removed.
        </p>
        <Link
          href="/seraphe-models"
          className="inline-flex items-center gap-2 mt-2 px-5 py-2.5 rounded-full bg-slate-900 text-white text-xs font-medium hover:bg-amber-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Models
        </Link>
      </div>
    );
  }

  console.log(model);

  return (
    <div className="min-h-screen py-8 md:py-16 bg-[#faf9f9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Breadcrumb Header */}
        <div className="border-b border-gray-200/60 pb-4">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Models", href: "/seraphe-models" },
              { label: model.name },
            ]}
          />
        </div>

        {/* Profile Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5 top-24">
            <div className="relative aspect-3/4 w-full rounded-2xl overflow-hidden shadow-md bg-gray-100 group">
              <Image
                src={model.featureImage}
                alt={model.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-60" />
            </div>
          </div>

          {/* Model Info Details */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              {model.specialty && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/60 text-amber-800 text-xs font-semibold uppercase tracking-wider">
                  <Sparkles size={12} className="text-amber-600" />
                  {model.specialty}
                </div>
              )}

              <H1 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight text-gray-900">
                {model.name}
              </H1>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {model.height && (
                <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-xs space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
                    <Ruler size={14} className="text-amber-600" />
                    <span>Height</span>
                  </div>
                  <p className="text-lg font-bold text-gray-900">
                    {model.height}
                  </p>
                </div>
              )}

              {model.specialty && (
                <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-xs space-y-1 sm:col-span-2">
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
                    <Sparkles size={14} className="text-amber-600" />
                    <span>Focus Area</span>
                  </div>
                  <p className="text-lg font-bold text-gray-900 truncate">
                    {model.specialty}
                  </p>
                </div>
              )}
            </div>

            {/* Biography */}
            {model.bio && (
              <div className="space-y-2 border-t border-gray-100 pt-6">
                <h3 className="text-xs font-semibold uppercase text-gray-400 tracking-wider">
                  About
                </h3>
                <div className="prose prose-neutral max-w-none text-gray-600 leading-relaxed text-sm sm:text-base font-light">
                  <p>{model.bio}</p>
                </div>
              </div>
            )}

            {/* Hobbies Badges */}
            {model.hobbies && model.hobbies.length > 0 && (
              <div className="space-y-3 border-t border-gray-100 pt-6">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase text-gray-400 tracking-wider">
                  <Heart size={14} className="text-amber-600" />
                  <span>Interests & Hobbies</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {model.hobbies.map((hobby: string) => (
                    <span
                      key={hobby}
                      className="px-3.5 py-1.5 rounded-full bg-white border border-gray-200/80 text-gray-700 text-xs font-medium shadow-2xs hover:border-amber-400 transition-colors capitalize"
                    >
                      {hobby}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Gallery / Portfolio Section */}
        {model.images && model.images.length > 0 && (
          <div className="pt-12 border-t border-gray-200/60 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
              <div>
                <h3 className="text-2xl font-serif font-bold text-gray-900">
                  Portfolio Gallery
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  Editorial and campaign features for {model.name}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {model.images.map((image: string, index: number) => (
                <div
                  key={index}
                  className="relative aspect-4/5 w-full rounded-xl overflow-hidden bg-gray-100 shadow-xs group"
                >
                  <Image
                    src={image}
                    alt={`${model.name} portfolio photo ${index + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
