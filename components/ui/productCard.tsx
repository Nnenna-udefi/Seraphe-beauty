import React from "react";
import Image from "next/image";
import model from "@/components/images/model.jpeg";
import { Button } from "./button";
import { H3 } from "./heading";

const ProductCard = () => {
  return (
    <div className="max-w-full">
      <div className="flex flex-col gap-1">
        <div className=" pt-2">
          <Image
            src={model}
            alt="model"
            width={300}
            height={0}
            className="max-w-full  "
          />
        </div>
        <div>
          <h3 className="uppercase text-yellowText text-sm pt-2">Skin</h3>
          <H3>Victoria secret Brush Set</H3>
          <p className=" text-darkText text-sm py-2">
            Mystic Woods: Leafy Feathers/Butterfly Won
          </p>
          <Button className="">N60,000 Amazon</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
