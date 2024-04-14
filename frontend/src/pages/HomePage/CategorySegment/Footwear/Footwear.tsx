import { ProductCluster } from "../../../../components/ProductCard/ProductCluster";
import { paddingForProductCard } from "../../../../defineSize";
// import SortByPanel from "../../SortByPanel";
import { footwearCluster1, footwearCluster2 } from "./footwearCluster";

const Footwear = () => {
  return (
    <>
      <div className="relative mt-20vh">
        <img src="/assets/weavyArch.svg" alt="wave" className="w-100vw" />
        {/* <div className="absolute z-10 top-60% ">
          <SortByPanel />
        </div> */}
      </div>
      <section
        id="dresses"
        className={` bg-bgLightBlue px-10vw py-5vh relative ${paddingForProductCard} mb-20vh`}
      >
        <p className=" text-primaryBlue text-3xl 3xl:text-5xl font-bold w-100% sm:w-70% xmd:w-70% mb-10vh leading-loose ">
          STYLISH AND STRONG: OUR WOMEN'S BOOT COLLECTION
        </p>
        <div id="container" className="grid space-y-16">
          <ProductCluster
            color="blue"
            leftRow={footwearCluster1.leftRow}
            rightRow={footwearCluster1.rightRow}
          />
          <ProductCluster
            color="blue"
            leftRow={footwearCluster2.leftRow}
            rightRow={footwearCluster2.rightRow}
          />
        </div>
      </section>
    </>
  );
};

export default Footwear;
