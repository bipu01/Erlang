import {
  ProductCardLeft,
  ProductCardRight,
} from "../../../components/ProductCard/ProductCard";
import { paddingForPage } from "../../../defineSize";
import SortByPanel from "../SortByPanel";

const CategorySegment = () => {
  console.log("This is only for github testing");
  return (
    <>
      <section
        className={` bg-bgLightBlue h-90vh px-10vw py-5vh ${paddingForPage}`}
      >
        <SortByPanel />
        <h1 className=" text-primaryBlue text-3xl font-bold w-50%">
          WE HAVE SOMETHING FOR EVERYONE
        </h1>
        <div id="container" className="grid ">
          <ProductCardRight
            ProductName="Draggy Hose with droppy strings"
            rating={4.5}
            price={4500}
            imgSrc="/assets/Dress/Co Fall 2019 Fashion Show.jpeg"
          />
          <ProductCardLeft />
        </div>
      </section>
    </>
  );
};

export default CategorySegment;
