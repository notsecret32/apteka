"use client";

import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Product } from "@/lib/types";

import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

type ProductCardProps = Product;

export const ProductCard = ({
  id,
  title,
  price,
  image,
  characteristics,
}: ProductCardProps) => {
  return (
    <Link
      href="#"
      className="relative flex w-full flex-col rounded-2xl bg-white transition duration-200 lg:hover:shadow-[0_4px_16px_#1a365f14]"
    >
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            className="group absolute border-none p-1 -m-1 top-2.75 right-3 z-1 hover:bg-transparent cursor-pointer"
            onClick={(e) => e.preventDefault()}
          >
            <Heart className="text-primary-gray size-6" size={24} />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>В избранное</p>
        </TooltipContent>
      </Tooltip>
      <div className="relative w-full">
        <div className="flex flex-wrap items-start absolute z-1 top-3 left-3"></div>
        {characteristics.isByPrescription === "По рецепту" && (
          <div className="flex justify-center items-center w-fit text-orange bg-secondary-orange text-primary-orange text-xs leading-4 h-5 px-2 rounded-[6px] bottom-3 left-3 absolute z-1">
            По рецепту
          </div>
        )}
        <div className="flex relative z-0 w-full pt-[100%] overflow-hidden rounded-2xl">
          <Image
            className="w-full h-full absolute top-0 left-0"
            loading="lazy"
            width={215}
            height={215}
            src={image}
            alt={title}
          />
        </div>
      </div>
      <div className="p-3 flex flex-col flex-1">
        <div className="flex items-baseline mb-3">
          <div className="h-[1.3em] font-bold leading-[130%] mr-1 xl:text-[16px] text-[14px] text-black">
            {price} p
          </div>
        </div>
        <div className="mb-3 h-13.5 hyphens-auto wrap-break-word text-sm leading-4.5 text-black line-clamp-3">
          {title}
        </div>
        <div className="mb-3 text-xs leading-4 text-primary-gray line-clamp-1">
          {characteristics.manufacturer}, {characteristics.country}
        </div>
        <Button>В корзину</Button>
      </div>
    </Link>
  );
};
