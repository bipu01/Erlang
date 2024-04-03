import { ProductCluster } from "../../../../components/ProductCard/ProductCard";
import { paddingForPage } from "../../../../defineSize";
// import SortByPanel from "../../SortByPanel";
import { footwearCluster1, footwearCluster2 } from "./footwearCluster";

const Footwear = () => {
  return (
    <>
      <div className="relative mt-20vh">
        <img src="/assets/weavyArch.svg" alt="wave" className="" />
        {/* <div className="absolute z-10 top-60% ">
          <SortByPanel />
        </div> */}
      </div>
      <section
        id="dresses"
        className={` bg-bgLightBlue px-10vw py-5vh relative ${paddingForPage} mb-20vh`}
      >
        <p className=" text-primaryBlue text-3xl 3xl:text-5xl font-bold w-100% sm:w-70% xmd:w-70% mb-10vh leading-loose ">
          STYLISH AND STRONG: OUR WOMEN'S BOOT COLLECTION
        </p>
        <div id="container" className="grid space-y-16">
          <ProductCluster
            color="blue"
            product1={footwearCluster1.product1}
            product2={footwearCluster1.product2}
          />
          <ProductCluster
            color="blue"
            product1={footwearCluster2.product1}
            product2={footwearCluster2.product2}
          />
        </div>
      </section>
    </>
  );
};

export default Footwear;
