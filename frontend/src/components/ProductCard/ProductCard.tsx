import { ProductCardProp } from "../../declare";
import { AddToCartButton } from "../Buttons/Buttons";

export const ProductCardRightImg = (prop: ProductCardProp) => {
  return (
    <div className=" bg-slate-500  row-span-3 mt-6 relative">
      <div className="after:content-[''] after:absolute after:-top-6 after:z-20  after:w-100% after:h-6 after:bg-bodybg"></div>
      <div className="absolute z-30 -top-3% flex w-100% gap-30% left-25%">
        <div className=" w-12 h-12 bg-bgLightBlue rounded-full border-6 border-bodybg"></div>
        <div className=" w-12 h-12 bg-bgLightBlue rounded-full border-6 border-bodybg"></div>
      </div>
      <img
        className="h-100% w-100% object-cover "
        src={prop.imgSrc}
        alt={prop.imgSrc}
      />
    </div>
  );
};
export const ProductCardLeftImg = (prop: ProductCardProp) => {
  return (
    <div className=" bg-slate-500 row-span-3 mb-6 over relative">
      {/* <div className=" after:content-[''] after:absolute after:-bottom-6 after:z-0 after:w-50vw after:h-32   after:bg-bodybg"></div> */}
      <div className="absolute z-30 -bottom-3% flex w-100% gap-30% left-25%">
        <div className=" w-12 h-12 bg-bgLightBlue rounded-full border-6 border-bodybg"></div>
        <div className=" w-12 h-12 bg-bgLightBlue rounded-full border-6 border-bodybg"></div>
      </div>
      <img
        className="w-100% h-100% object-cover relative z-20"
        src={prop.imgSrc}
        alt={prop.imgSrc}
      />
    </div>
  );
};

export const ProductCardLeftData = (prop: ProductCardProp) => {
  return (
    <div className=" relative z-10 bg-bodybg p-4 rounded-tr-full rounded-br-full row-span-3 pr-20%  xl:px-0% py-2% lg:py-4% space-y-5% after:content-[''] after:absolute after:-bottom-0 after:right-100% after:z-0 after:w-130% after:h-100% after:bg-bodybg">
      <div className="space-y-1">
        <h3
          id="productName"
          className=" text-md lg:text-xl xl:text-3xl font-semibold whitespace-nowrap "
        >
          {prop.ProductName}
        </h3>
        <div id="rating" className="flex gap-2 xl:text-3xl">
          {prop.rating}
          <div id="stars" className="flex">
            <img src="/icons/filledStar.svg" alt="" className=" xl:h-8" />
            <img src="/icons/filledStar.svg" alt="" className=" xl:h-8" />
            <img src="/icons/filledStar.svg" alt="" className=" xl:h-8" />
            <img src="/icons/filledStar.svg" alt="" className=" xl:h-8" />
            <img src="/icons/unfilledStar.svg" alt="" className=" xl:h-8" />
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-2 justify-between">
        <AddToCartButton />
        <h3 id="price" className=" text-lg font-semibold xl:text-3xl">
          NPR.{prop.price}
        </h3>
      </div>
    </div>
  );
};
export const ProductCardRightData = (prop: ProductCardProp) => {
  return (
    <div className="relative bg-bodybg rounded-tl-full rounded-bl-full row-span-3 pl-20% py-2% lg:py-4% space-y-5% after:content-[''] after:absolute after:-top-0 after:left-100% after:z-0 after:w-130% after:h-100% after:bg-bodybg">
      <div className="space-y-1 xl:space-y-2">
        <h3
          id="productName"
          className=" text-md lg:text-xl 2xl:text-2xl font-semibold whitespace-nowrap"
        >
          {prop.ProductName}
        </h3>
        <div id="rating" className="flex gap-2 xl:text-3xl">
          {prop.rating}
          <div id="stars" className="flex">
            <img src="/icons/filledStar.svg" alt="" className=" 2xl:h-8" />
            <img src="/icons/filledStar.svg" alt="" className=" 2xl:h-8" />
            <img src="/icons/filledStar.svg" alt="" className=" 2xl:h-8" />
            <img src="/icons/filledStar.svg" alt="" className=" 2xl:h-8" />
            <img src="/icons/unfilledStar.svg" alt="" className=" 2xl:h-8" />
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-2 justify-between">
        <AddToCartButton />
        <h3 id="price" className=" text-lg font-semibold xl:text-3xl">
          NPR.{prop.price}
        </h3>
      </div>
    </div>
  );
};

//This includes group of two product arranged in grid
export const ProductCluster = () => {
  return (
    <div className="grid grid-cols-2 gap-10% overflow-hidden ">
      <div className="grid grid-rows-4 ">
        <div className="row-span-1 grid grid-rows-5">
          <ProductCardRightData
            ProductName="Draggy Hose with droppy strings"
            rating={4.5}
            price={4500}
          />
          <div className=" row-span-2"></div>
        </div>
        <ProductCardLeftImg imgSrc="/assets/Dress/Pinterest image (6).jpeg" />
      </div>

      <div className="grid grid-rows-4 ">
        <ProductCardRightImg imgSrc="/assets/Dress/Co Fall 2019 Fashion Show.jpeg" />
        <div className="row-span-1 grid grid-rows-5">
          <div className=" row-span-2"></div>
          <ProductCardLeftData
            ProductName="Fancy Blue skirt"
            rating={4.5}
            price={5000}
          />
        </div>
      </div>
    </div>
  );
};
