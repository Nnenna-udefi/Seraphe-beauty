import { Story } from "../types/api";

export function getPopularStories(
  tips: any[] = [],
  trends: any[] = [],
  lifestyle: any[] = [],
  limit = 4,
): Story[] {
  // 1. Normalize Tips
  const normalizedTips: Story[] = tips.map((item) => ({
    _id: item._id,
    title: item.title,
    slug: item.slug,
    category: item.category || "Beauty Tip",
    author: item.author || "Seraphé Team",
    images: item.images || [],
    type: "tips",
    views: item.views || 0,
    isFeatured: item.isFeatured || false,
  }));

  // 2. Normalize Trends
  const normalizedTrends: Story[] = trends.map((item) => ({
    _id: item._id,
    title: item.title,
    slug: item.slug,
    category: item.focusArea || "Trend",
    author: item.author || "Seraphé Editor",
    images: item.images || (item.image ? [item.image] : []),
    type: "trends",
    views: item.views || 0,
    isFeatured: item.isFeatured || false,
  }));

  // 3. Normalize Lifestyle
  const normalizedLifestyle: Story[] = lifestyle.map((item) => ({
    _id: item._id,
    title: item.title,
    slug: item.slug,
    category: item.category || "Lifestyle",
    author: item.author || "Seraphé Editor",
    images: item.images || (item.image ? [item.image] : []),
    type: "lifestyle",
    views: item.views || 0,
    isFeatured: item.isFeatured || false,
  }));

  // 4. Combine all stories
  const allStories = [
    ...normalizedTips,
    ...normalizedTrends,
    ...normalizedLifestyle,
  ];

  // 5. Sort by Featured status first, then by view count (or fallback to original order)
  return allStories
    .sort((a, b) => {
      if (a.isFeatured !== b.isFeatured) {
        return a.isFeatured ? -1 : 1;
      }
      return (b.views || 0) - (a.views || 0);
    })
    .slice(0, limit);
}
