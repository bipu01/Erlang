import { ProductCardProp } from "../../declare";
import { sizeOfPunchHole } from "../../defineSize";
import { AddToCartButton } from "../Buttons/Buttons";

export const ProductCardLeftImg = (prop: ProductCardProp) => {
  return (
    <div className="row-span-2 bg-slate-500 mt-6 3xl:mt-10 relative shadow-md  ">
      <div className="absolute z-30 -top-3% 4xl:-top-2% flex w-100% gap-30% left-25%">
        <div
          className={`${sizeOfPunchHole} ${
            prop.holeColor === "pink" ? "bg-bgLightPink" : "bg-bgLightBlue"
          } rounded-full border-6 border-bodybg shadow-inner`}
        ></div>
        <div
          className={`${sizeOfPunchHole} ${
            prop.holeColor === "pink" ? "bg-bgLightPink" : "bg-bgLightBlue"
          } rounded-full border-6 border-bodybg shadow-inner`}
        ></div>
      </div>
      <img
        className="h-100% w-100% object-cover relative z-20"
        src={prop.imgSrc}
        alt={prop.imgSrc}
      />
    </div>
  );
};
export const ProductCardRightImg = (prop: ProductCardProp) => {
  return (
    <div className="row-span-2 bg-slate-500 mb-6 3xl:mb-10 over relative shadow-md">
      <div className="absolute z-30 -bottom-3% 4xl:-bottom-2% flex w-100% gap-30% left-25%">
        <div
          className={`${sizeOfPunchHole} ${
            prop.holeColor === "pink" ? "bg-bgLightPink" : "bg-bgLightBlue"
          } rounded-full border-6 border-bodybg shadow-inner`}
        ></div>
        <div
          className={`${sizeOfPunchHole} ${
            prop.holeColor === "pink" ? "bg-bgLightPink" : "bg-bgLightBlue"
          } rounded-full border-6 border-bodybg shadow-inner`}
        ></div>
      </div>
      <img
        className="w-100% h-100% object-cover relative z-20"
        src={prop.imgSrc}
        alt={prop.imgSrc}
      />
    </div>
  );
};

export const DataOfRightImg = (prop: ProductCardProp) => {
  return (
    <div
      className={`row-span-1 space-y-10% shadow-md relative z-10 bg-bodybg p-4 pl-20% rounded-tl-full rounded-bl-full xl:px-0% py-2% lg:py-4% 
                  after:content-[''] after:absolute after:shadow-md after:-bottom-0 after:left-100% after:z-0 after:w-130% after:h-100% after:bg-bodybg`}
    >
      <div
        className={`space-y-1 xl:space-y-2 after:absolute after:content-[''] after:h-0.5 after:w-90% after:bg-black after:opacity-20 after:z-40 
                    before:absolute before:content-[''] before:h-100% before:w-4 before:bg-bodybg before:-right-2 before:z-30 before:top-0`}
      >
        <div
          className={`absolute ${sizeOfPunchHole} ${
            prop.holeColor === "pink" ? "bg-bgLightPink" : "bg-bgLightBlue"
          }  rounded-full border-6 border-bodybg shadow-inner -top-4% 4xl:-top-3% 4xl:left-10% left-7% lg:left-10%`}
        ></div>
        <h3
          id="productName"
          className=" text-md lg:text-xl 2xl:text-2xl 3xl:text-3xl font-semibold whitespace-nowrap "
        >
          {prop.ProductName}
        </h3>
        <div id="rating" className="flex gap-2 3xl:text-2xl items-center">
          {prop.rating}
          <div id="stars" className="flex">
            <img src="/icons/filledStar.svg" alt="" className=" 3xl:h-6" />
            <img src="/icons/filledStar.svg" alt="" className=" 3xl:h-6" />
            <img src="/icons/filledStar.svg" alt="" className=" 3xl:h-6" />
            <img src="/icons/filledStar.svg" alt="" className=" 3xl:h-6" />
            <img src="/icons/unfilledStar.svg" alt="" className=" 3xl:h-6" />
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-2 justify-between">
        <AddToCartButton />
        <h3 id="price" className=" text-lg font-semibold xl:text-2xl">
          NPR.{prop.price}
        </h3>
      </div>
    </div>
  );
};
export const DataOfLeftImg = (prop: ProductCardProp) => {
  return (
    <div
      className={`row-span-1 space-y-10% shadow-md relative z-0 bg-bodybg pl-5% pr-10% py-2% lg:py-4% rounded-tr-full rounded-br-full after:content-[''] after:absolute after:-top-0 after:shadow-md after:right-100% after:h-100% after:w-150% after:bg-bodybg`}
    >
      <div
        className={`space-y-2 xl:space-y-2 after:absolute after:content-[''] after:h-0.5 after:w-90% after:bg-black after:opacity-20 after:z-40 before:absolute before:content-[''] before:h-100% before:w-4 before:bg-bodybg before:-left-2 before:z-30 before:top-0`}
      >
        <div
          className={`absolute ${sizeOfPunchHole} ${
            prop.holeColor === "pink" ? "bg-bgLightPink" : "bg-bgLightBlue"
          }  rounded-full border-6 border-bodybg shadow-inner -top-4% 4xl:-top-3% 4xl:right-10% right-5% lg:right-10%`}
        ></div>
        <h3
          id="productName"
          className=" text-md lg:text-xl 2xl:text-2xl 3xl:text-3xl font-semibold relative z-20 "
        >
          {prop.ProductName}
        </h3>
        <div id="rating" className="flex gap-2 3xl:text-2xl items-center">
          {prop.rating}
          <div id="stars" className="flex">
            <img src="/icons/filledStar.svg" alt="" className=" 3xl:h-6" />
            <img src="/icons/filledStar.svg" alt="" className=" 3xl:h-6" />
            <img src="/icons/filledStar.svg" alt="" className=" 3xl:h-6" />
            <img src="/icons/filledStar.svg" alt="" className=" 3xl:h-6" />
            <img src="/icons/unfilledStar.svg" alt="" className=" 3xl:h-6" />
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-2 justify-between">
        <AddToCartButton />
        <h3 id="price" className=" text-lg font-semibold xl:text-2xl">
          NPR.{prop.price}
        </h3>
      </div>
    </div>
  );
};

//This includes group of two product arranged in grid
