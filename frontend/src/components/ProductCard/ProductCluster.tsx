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
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10% overflow-x-clip">
      <div className="grid sm:grid-rows-3 ">
        <div className="sm:row-span-1 sm:grid sm:grid-rows-2">
          <DataOfRightImg
            holeColor={color}
            ProductName={leftRow.ProductName}
            rating={leftRow.rating}
            price={leftRow.price}
          />
          <div className=" sm:row-span-1"></div>
        </div>
        <ProductCardLeftImg holeColor={color} imgSrc={rightRow.imgSrc} />
      </div>

      <div className="sm:grid sm:grid-rows-3 ">
        <ProductCardRightImg holeColor={color} imgSrc={leftRow.imgSrc} />
        <div className="sm:row-span-1 sm:grid sm:grid-rows-2">
          <div className=" sm:row-span-1"></div>
          <DataOfLeftImg
            holeColor={color}
            ProductName={rightRow.ProductName || ""}
            rating={rightRow.rating || 0}
            price={rightRow.price || 0}
          />
        </div>
      </div>
    </div>
  );
};
