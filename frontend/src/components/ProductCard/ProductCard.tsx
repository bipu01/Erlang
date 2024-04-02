import { ProductCardProp } from "../../declare";
import { AddToCartButton } from "../Buttons/Buttons";

export const ProductCardRightImg = (prop: ProductCardProp) => {
  return (
    <div className="h-50vh xl:h-50vh overflow-hidden bg-slate-500 mb-10vh row-span-3">
      <img className=" object-cover " src={prop.imgSrc} alt={prop.imgSrc} />
    </div>
  );
};

export const ProductCardRightData = (prop: ProductCardProp) => {
  return (
    <div className=" bg-bodybg p-4 h-32 min-w-96 rounded-tl-full rounded-bl-full px-16 row-span-1">
      <h3 className=" text-xl font-medium ">{prop.ProductName}</h3>
      <div className="flex gap-2">
        {prop.rating}
        <div className="flex">
          <img src="/icons/filledStar.svg" alt="" />
          <img src="/icons/filledStar.svg" alt="" />
          <img src="/icons/filledStar.svg" alt="" />
          <img src="/icons/filledStar.svg" alt="" />
          <img src="/icons/unfilledStar.svg" alt="" />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <AddToCartButton />
        <h3 className=" text-lg font-semibold">NPR.{prop.price}</h3>
      </div>
    </div>
  );
};

export const ProductCardLeftImg = (prop: ProductCardProp) => {
  return (
    <div className="h-50vh xl:h-50vh overflow-hidden bg-slate-500 row-span-3">
      <img className=" object-cover " src={prop.imgSrc} alt={prop.imgSrc} />
    </div>
  );
};

export const ProductCardLeftData = (prop: ProductCardProp) => {
  return (
    <div className=" bg-bodybg p-4 h-32 min-w-96 rounded-tr-full rounded-br-full px-16 row-span-1">
      <h3 className=" text-xl font-medium ">{prop.ProductName}</h3>
      <div className="flex gap-2">
        {prop.rating}
        <div className="flex">
          <img src="/icons/filledStar.svg" alt="" />
          <img src="/icons/filledStar.svg" alt="" />
          <img src="/icons/filledStar.svg" alt="" />
          <img src="/icons/filledStar.svg" alt="" />
          <img src="/icons/unfilledStar.svg" alt="" />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <AddToCartButton />
        <h3 className=" text-lg font-semibold">NPR.{prop.price}</h3>
      </div>
    </div>
  );
};

export const ProductCluster = () => {
  return (
    <div className="grid grid-cols-2 ">
      <div className="grid grid-rows-4">
        <ProductCardRightData
          ProductName="Draggy Hose with droppy strings"
          rating={4.5}
          price={4500}
        />
        <ProductCardRightImg imgSrc="/assets/Dress/Co Fall 2019 Fashion Show.jpeg" />
      </div>

      <div className="grid grid-rows-4 ">
        <ProductCardLeftImg imgSrc="/assets/Dress/Pinterest image (6).jpeg" />
        <ProductCardLeftData
          ProductName="Fancy Blue skirt"
          rating={4.5}
          price={5000}
        />
      </div>
    </div>
  );
};
