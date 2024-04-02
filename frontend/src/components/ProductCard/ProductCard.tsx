import { ProductCardProp } from "../../declare";
import { AddToCartButton } from "../Buttons/Buttons";

export const ProductCardRightImg = (prop: ProductCardProp) => {
  return (
    <div className="h-50vh xl:h-60vh overflow-hidden bg-slate-500">
      <img className=" object-cover " src={prop.imgSrc} alt={prop.imgSrc} />
    </div>
  );
};

export const ProductCardRightData = (prop: ProductCardProp) => {
  return (
    <div className=" bg-bodybg p-4 h-32 min-w-96 rounded-tl-full rounded-bl-full px-16">
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

export const ProductCardLeft = () => {
  return <div>ProductCardLefteyyyyy</div>;
};
