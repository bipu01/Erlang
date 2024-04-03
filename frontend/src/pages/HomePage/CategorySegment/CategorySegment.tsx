import { ProductCluster } from "../../../components/ProductCard/ProductCard";
import { paddingForPage } from "../../../defineSize";
import SortByPanel from "../SortByPanel";

const CategorySegment = () => {
  console.log("This is only for github testing");
  return (
    <>
      <section className={` bg-bgLightBlue px-10vw py-5vh ${paddingForPage}`}>
        <SortByPanel />
        <h1 className=" text-primaryBlue text-3xl font-bold w-100% sm:w-70% xmd:w-50% ">
          WE HAVE SOMETHING FOR EVERYONE
        </h1>
        <div id="container" className="grid ">
          <ProductCluster />
        </div>
      </section>
    </>
  );
};

export default CategorySegment;
