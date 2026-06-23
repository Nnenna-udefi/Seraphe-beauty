import React from "react";
import Image from "next/image";
import model from "@/app/images/model.jpeg";
import { Button } from "./button";
import { H3 } from "./heading";

const ProductCard = () => {
  return (
    <div className="">
      <div className="flex flex-col gap-1">
        <div className=" pt-2">
          <Image
            src={model}
            alt="model"
            width={300}
            height={0}
            className="w-full  "
          />
        </div>
        <div>
          <h3 className="uppercase text-yellowText text-sm pt-2">Skin</h3>
          <H3>Victoria secret Brush Set</H3>
          <p className=" text-darkText text-sm py-2">
            Mystic Woods: Leafy Feathers/Butterfly Won
          </p>
          <Button className="w-full">N60,000 Amazon</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
