import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface BlogCardProps {
  title: string;
  category: string;
  author: string;
  image: string;
  href: string;
  buttonText?: string;
}

export default function BlogCard({
  title,
  category,
  author,
  image,
  href,
  buttonText = "Read More",
}: BlogCardProps) {
  return (
    <Link href={href} className="group block h-full  flex-col">
      <div className="overflow-hidden rounded-lg bg-stone-100  aspect-4/5 relative">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>

      <div className="mt-4 flex flex-col grow">
        <span className="uppercase text-yellowText text-xs tracking-wider font-semibold">
          {category}
        </span>

        <h2 className="line-clamp-2 leading-snug font-medium my-2 text-base md:text-lg text-stone-900  group-hover:text-primaryBg transition-colors">
          {title}
        </h2>

        <p className="uppercase text-stone-500 text-xs tracking-wider mt-auto pt-1">
          By {author}
        </p>

        {/* Visual action cue - replaces invalid nested button */}
        <div className="mt-4 pt-3 border-t border-stone-200  flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-stone-900  group-hover:text-primaryBg transition-colors">
          <span>{buttonText}</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
