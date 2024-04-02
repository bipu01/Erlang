
import { ProductCardProp } from "../../declare";
import { AddToCartButton } from "../Buttons/Buttons";

export const ProductCardRight = (prop: ProductCardProp) => {
  return (
    <article className={`flex paddingForPage `}>
      <div className=" bg-bodybg p-4 h-32 w-40vw min-w-96 rounded-tl-full rounded-bl-full px-16">
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
      <div className=" w-96 h-50vh overflow-hidden  bg-slate-500">
        <img
          className=" object-cover "
          src={prop.imgSrc}
          alt={prop.ProductName}
        />
      </div>
    </article>
  );
};
export const ProductCardLeft = () => {
  return <div>ProductCardLefteyyyyy</div>;
};
