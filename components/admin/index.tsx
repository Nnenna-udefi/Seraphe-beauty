"use client";
import React, { useEffect, useState } from "react";
import { Lifestyle } from "../types/api";
import { api } from "../lib/api";
import { toast } from "sonner";
import Card from "../ui/card";
import { useAuth } from "../context/authContext";

export default function AdminDashboard() {
  const { admin } = useAuth();
  const [stats, setStats] = useState({
    blogs: 0,
    categories: 0,
    products: 0,
    reviews: 0,
    lifestyle: 0,
  });
  const [chartData, setChartData] = useState<
    { month: string; count: number }[]
  >([]);

  const [latestPosts, setLatestPosts] = useState<Lifestyle[]>([]);

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const [blogs, categories, products, reviews, lifestyle] =
          await Promise.all([
            api.adminShop.getTips(),
            api.adminShop.getCategories(),
            api.adminShop.getProducts(),
            api.adminShop.getProductReviews(),
            api.adminShop.getLifestyle(),
          ]);

        setStats({
          blogs: blogs.length,
          categories: categories.length,
          products: products.length,
          reviews: reviews.length,
          lifestyle: lifestyle.length,
        });

        setLatestPosts(
          [...lifestyle]
            .sort(
              (a, b) =>
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime(),
            )
            .slice(0, 5),
        );

        const months = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ];

        const uploads = new Array(12).fill(0);

        lifestyle.forEach((article) => {
          const month = new Date(article.createdAt).getMonth();
          uploads[month]++;
        });

        setChartData(
          months.map((month, index) => ({
            month,
            count: uploads[index],
          })),
        );
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        toast.error("Failed to load dashboard");
      }
    };

    loadDashboard();
  }, []);
  const maxCount = Math.max(...chartData.map((c) => c.count), 1);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-serif font-bold">Dashboard</h1>
        <h2>Welcome back, {admin?.name}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <Card title="Products" value={stats.products} />

        <Card title="Categories" value={stats.categories} />

        <Card title="Reviews" value={stats.reviews} />

        <Card title="Beauty Tips" value={stats.blogs} />

        <Card title="Lifestyle" value={stats.lifestyle} />
      </div>

      {/* Upload Frequency Monthly Chart */}
      <div className="bg-white border p-6 rounded-lg shadow-sm">
        <h3 className="text-sm font-semibold uppercase text-gray-400 tracking-wider mb-6">
          Blog Upload Volume (Per Month)
        </h3>
        <div className="flex items-end gap-4 h-48 pt-4 border-b border-l px-4 border-gray-200">
          {chartData.map((data) => (
            <div
              key={data.month}
              className="flex-1 flex flex-col items-center gap-2 group h-full justify-end"
            >
              <div
                style={{
                  height: `${(data.count / maxCount) * 100}%`,
                }}
                className="w-full bg-slate-800 group-hover:bg-amber-500 transition-colors rounded-t relative"
              >
                <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  {data.count}
                </span>
              </div>
              <span className="text-xs text-gray-500 mt-2">{data.month}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Top 5 Latest Posts Table */}
      <div className="bg-white border rounded-lg shadow-sm overflow-hidden">
        <div className="p-5 border-b">
          <h3 className="text-sm font-semibold uppercase text-gray-400 tracking-wider">
            Latest Published Stories
          </h3>
        </div>
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="bg-gray-50 border-b text-gray-500 text-xs font-bold uppercase">
              <th className="p-4">Title</th>
              <th className="p-4">Category</th>
              <th className="p-4">Author</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {latestPosts.map((post) => (
              <tr key={post._id} className="hover:bg-gray-50">
                <td className="p-4 font-medium">{post.title}</td>
                <td className="p-4">{post.category}</td>
                <td className="p-4">{post.author}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
