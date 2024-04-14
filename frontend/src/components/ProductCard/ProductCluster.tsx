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
  return (
    <div className="grid grid-cols-5 sm:grid-cols-2 sm:grid-rows-3 sm:gap-x-8 gap-y-16 sm:gap-y-0 sm:space-y-0 overflow-x-clip mb-5vh h-100vh">
      <ProductCardLeftImg holeColor={color} imgSrc={leftRow.imgSrc} />
      <div className="row-span-2 col-span-2 sm:col-span-1 sm:row-span-1 grid sm:grid-rows-2">
        <DataOfLeftImg
          holeColor={color}
          ProductName={rightRow.ProductName || ""}
          rating={rightRow.rating || 0}
          price={rightRow.price || 0}
        />
        <div className="hidden sm:block sm:row-span-1"></div>
      </div>

      <ProductCardRightImg holeColor={color} imgSrc={rightRow.imgSrc} />
      <div className="row-span-2 col-span-2 sm:col-span-1 sm:row-span-1 grid sm:grid-rows-2">
        <div className="hidden sm:block sm:row-span-1"></div>
        <DataOfRightImg
          holeColor={color}
          ProductName={leftRow.ProductName}
          rating={leftRow.rating}
          price={leftRow.price}
        />
      </div>
    </div>
  );
};
