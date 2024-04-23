import { productClusterProp } from "../../declare";
import {
  DataOfLeftImg,
  DataOfRightImg,
  ProductCardLeftImg,
  ProductCardRightImg,
} from "./ProductCard";

export const ProductCluster = ({
  color,
  leftRow,
  rightRow,
}: productClusterProp) => {
  // console.log({
  //   "from productCluster": "",
  //   leftRow: leftRow,
  //   rightRow: rightRow,
  // });
  return (
    <div className="grid grid-cols-5 sm:grid-cols-2 sm:grid-rows-3 sm:gap-x-8 gap-y-16 sm:gap-y-0 sm:space-y-0 overflow-x-clip sm:mb-5vh max-w-[430px] sm:max-w-full  h-55rem">
      <ProductCardLeftImg
        holeColor={color}
        img1={leftRow.img1}
        img2={leftRow.img2}
        img3={leftRow.img3}
      />

      <div className="row-span-2 col-span-2 sm:col-span-1 sm:row-span-1 grid sm:grid-rows-2">
        <DataOfLeftImg
          holeColor={color}
          name={leftRow.name}
          desc={leftRow.desc}
          ratingRate={leftRow.ratingRate || 0}
          ratingCount={leftRow.ratingCount}
          currentPrice={leftRow.priceCurrent}
          originalPrice={leftRow.priceOriginal}
        />
        <div className="hidden sm:block sm:row-span-1"></div>
      </div>

      <ProductCardRightImg
        holeColor={color}
        img1={rightRow.img1}
        img2={rightRow.img2}
        img3={rightRow.img3}
      />

      <div className="row-span-2 col-span-2 sm:col-span-1 sm:row-span-1 grid sm:grid-rows-2">
        <div className="hidden sm:block sm:row-span-1"></div>
        <DataOfRightImg
          holeColor={color}
          name={rightRow.name}
          desc={rightRow.desc}
          ratingRate={rightRow.ratingRate || 0}
          ratingCount={rightRow.ratingCount}
          currentPrice={rightRow.priceCurrent}
          originalPrice={rightRow.priceOriginal}
        />
      </div>
    </div>
  );
};
