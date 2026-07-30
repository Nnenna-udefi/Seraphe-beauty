import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";

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
    <Link href={href}>
      <div className="rounded-md ">
        <Image
          src={image}
          alt={title}
          width={500}
          height={0}
          className="w-full h-75 aspect-4/6 object-cover rounded-md"
        />

        <div className="mt-3">
          <p className="uppercase text-yellowText text-sm">{category}</p>

          <h2 className="line-clamp-3 leading-tight py-2 text-lg md:text-xl hover:underline">
            {title}
          </h2>

          <p className="uppercase text-darkText text-sm">{author}</p>
        </div>

        <Button className="mt-5 w-full">
          {buttonText}
          <span className="ml-2">&rarr;</span>
        </Button>
      </div>
    </Link>
  );
}
