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
    <div className="grid sm:grid-cols-2 sm:grid-rows-3 space-x-8 overflow-x-clip mb-5vh">
      <ProductCardLeftImg holeColor={color} imgSrc={leftRow.imgSrc} />
      <div className=" row-span-1 grid sm:grid-rows-2">
        <DataOfLeftImg
          holeColor={color}
          ProductName={rightRow.ProductName || ""}
          rating={rightRow.rating || 0}
          price={rightRow.price || 0}
        />
        <div className=" row-span-1"></div>
      </div>

      <ProductCardRightImg holeColor={color} imgSrc={rightRow.imgSrc} />
      <div className="row-span-1 grid grid-rows-2">
        <div className=" row-span-1"></div>
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
