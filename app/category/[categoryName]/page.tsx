import { blogDummy } from "@/components/lib/constants";
import React from "react";

interface Props {
  params: { categoryName: string };
}

const CategoryPage = ({ params }: Props) => {
  const { categoryName } = params;

  // Filter the dataset down to items matching the URL parameter
  const filteredBlogs = blogDummy.filter(
    (blog) => blog.category.toLowerCase() === categoryName.toLowerCase(),
  );

  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold capitalize mb-8">
        {categoryName} Stories
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredBlogs.map((blog) => (
          <div key={blog.id}>
            {/* Render targeted cards for this category here */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
