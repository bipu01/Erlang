import { ProductCluster } from "../../../../components/ProductCard/ProductCard";
import { paddingForPage } from "../../../../defineSize";
import SortByPanel from "../../SortByPanel";
import { Dressluster1, Dressluster2 } from "./dressCluster";

const Dresses = () => {
  return (
    <>
      <div className="relative mt-20vh">
        <img src="/assets/weavyArch.svg" alt="wave" className="" />
        <div className="absolute z-10 top-60% ">
          <SortByPanel />
        </div>
      </div>
      <section
        id="dresses"
        className={` bg-bgLightBlue px-10vw py-5vh relative ${paddingForPage} mb-20vh`}
      >
        <h1 className=" text-primaryBlue text-3xl 3xl:text-5xl font-bold w-100% sm:w-70% xmd:w-70% mb-10vh">
          WE HAVE SOMETHING FOR EVERYONE
        </h1>
        <div id="container" className="grid space-y-16">
          <ProductCluster
            color="blue"
            product1={Dressluster1.product1}
            product2={Dressluster1.product2}
          />
          <ProductCluster
            color="blue"
            product1={Dressluster2.product1}
            product2={Dressluster2.product2}
          />
        </div>
      </section>
      <div className="space-y-2 relative">
        <div className=" w-100% h-1 bg-lineColor"></div>
        <div className=" w-100% h-1 bg-lineColor"></div>
        <img
          src="/icons/lineDesign.svg"
          alt=""
          className="absolute h-12 -top-6 left-40%"
        />
      </div>
    </>
  );
};

export default Dresses;
