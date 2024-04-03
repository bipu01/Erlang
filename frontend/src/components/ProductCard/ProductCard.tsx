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
    <div className=" bg-slate-500 row-span-3 mb-6 relative">
      <div className=" after:content-[''] after:absolute after:-bottom-6 after:z-20  after:w-100% after:h-6 after:bg-bodybg"></div>
      <div className="absolute z-30 -bottom-3% flex w-100% gap-30% left-25%">
        <div className=" w-12 h-12 bg-bgLightBlue rounded-full border-6 border-bodybg"></div>
        <div className=" w-12 h-12 bg-bgLightBlue rounded-full border-6 border-bodybg"></div>
      </div>
      <img
        className="w-100% h-100% object-cover "
        src={prop.imgSrc}
        alt={prop.imgSrc}
      />
    </div>
  );
};

// export const ProductCardRightData = (prop: ProductCardProp) => {
//   return (
//     <div className=" bg-bodybg p-4 rounded-tl-full rounded-bl-full px-8 xl:px-16 row-span-3">
//       <h3 className=" text-md font-semibold whitespace-nowrap ">
//         {prop.ProductName}
//       </h3>
//       <div className="flex gap-2">
//         {prop.rating}
//         <div className="flex">
//           <img src="/icons/filledStar.svg" alt="" />
//           <img src="/icons/filledStar.svg" alt="" />
//           <img src="/icons/filledStar.svg" alt="" />
//           <img src="/icons/filledStar.svg" alt="" />
//           <img src="/icons/unfilledStar.svg" alt="" />
//         </div>
//       </div>
//       <div className="flex items-center gap-2 justify-between">
//         <AddToCartButton />
//         <h3 className=" text-lg font-semibold">NPR.{prop.price}</h3>
//       </div>
//     </div>
//   );
// };

export const ProductCardLeftData = (prop: ProductCardProp) => {
  return (
    <div className=" bg-bodybg p-4 rounded-tr-full rounded-br-full px-8 xl:px-16 row-span-3">
      <h3
        id="productName"
        className=" text-md xmd:text-xl font-semibold whitespace-nowrap "
      >
        {prop.ProductName}
      </h3>
      <div id="rating" className="flex gap-2">
        {prop.rating}
        <div id="stars" className="flex">
          <img src="/icons/filledStar.svg" alt="" />
          <img src="/icons/filledStar.svg" alt="" />
          <img src="/icons/filledStar.svg" alt="" />
          <img src="/icons/filledStar.svg" alt="" />
          <img src="/icons/unfilledStar.svg" alt="" />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <AddToCartButton />
        <h3 id="price" className=" text-lg font-semibold">
          NPR.{prop.price}
        </h3>
      </div>
    </div>
  );
};
export const ProductCardRightData = (prop: ProductCardProp) => {
  return (
    <div className="bg-bodybg p-4 rounded-tl-full rounded-bl-full pl-10 xl:px-16 row-span-3">
      <h3
        id="productName"
        className=" text-md lg:text-xl font-semibold whitespace-nowrap "
      >
        {prop.ProductName}
      </h3>
      <div id="rating" className="flex gap-2">
        {prop.rating}
        <div id="stars" className="flex">
          <img src="/icons/filledStar.svg" alt="" />
          <img src="/icons/filledStar.svg" alt="" />
          <img src="/icons/filledStar.svg" alt="" />
          <img src="/icons/filledStar.svg" alt="" />
          <img src="/icons/unfilledStar.svg" alt="" />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <AddToCartButton />
        <h3 id="price" className=" text-lg font-semibold">
          NPR.{prop.price}
        </h3>
      </div>
    </div>
  );
};

//This includes group of two product arranged in grid
export const ProductCluster = () => {
  return (
    <div className="grid grid-cols-2 ">
      <div className="grid grid-rows-4 h-100vh">
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

      <div className="grid grid-rows-4 h-100vh ">
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
