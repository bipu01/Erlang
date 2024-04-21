import PageBreakLine from "../../../../components/PageBreakLine";
import { ProductCluster } from "../../../../components/ProductCard/ProductCluster";
import { paddingForProductCard } from "../../../../defineSize";
// import SortByPanel from "../../SortByPanel";
import { JewelleryCluster1, JewelleryCluster2 } from "./jewelleryCluster";

const jewellery = () => {
  return (
    <>
      <div className="relative mt-7vh">
        <img src="/assets/weavyArchPink.svg" alt="wave" className="w-100vw" />
        {/* <div className="absolute z-10 top-60% ">
          <SortByPanel />
        </div> */}
      </div>
      <section
        id="dresses"
        className={` bg-bgLightPink px-10vw py-5vh relative ${paddingForProductCard} mb-20vh`}
      >
        <h1 className=" text-primaryBlue text-3xl 3xl:text-5xl font-bold w-100% sm:w-70% xmd:w-70% mb-10vh">
          DAZZLING EARRINGS FOR EVERY OCCASION
        </h1>
        <div id="container" className="grid space-y-16">
          <ProductCluster
            color="pink"
            leftRow={JewelleryCluster1.leftRow}
            rightRow={JewelleryCluster1.rightRow}
          />
          <ProductCluster
            color="pink"
            leftRow={JewelleryCluster2.leftRow}
            rightRow={JewelleryCluster2.rightRow}
          />
        </div>
      </section>
      <PageBreakLine />
    </>
  );
};

export default jewellery;
