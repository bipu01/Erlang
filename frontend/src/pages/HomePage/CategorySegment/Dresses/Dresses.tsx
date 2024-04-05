import PageBreakLine from "../../../../components/PageBreakLine";
import { ProductCluster } from "../../../../components/ProductCard/ProductCluster";
import { paddingForPage } from "../../../../defineSize";
import SortByPanel from "../../SortByPanel";
import { Dressluster1, Dressluster2 } from "./dressCluster";

const Dresses = () => {
  return (
    <>
      <div className="relative mt-20vh">
        <img src="/assets/weavyArch.svg" alt="wave" className="w-100vw" />
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
            leftRow={Dressluster1.leftRow}
            rightRow={Dressluster1.rightRow}
          />
          <ProductCluster
            color="blue"
            leftRow={Dressluster2.leftRow}
            rightRow={Dressluster2.rightRow}
          />
        </div>
      </section>

      <PageBreakLine />
    </>
  );
};

export default Dresses;
