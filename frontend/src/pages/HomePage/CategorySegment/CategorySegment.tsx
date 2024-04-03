import { ProductCluster } from "../../../components/ProductCard/ProductCard";
import { paddingForPage } from "../../../defineSize";
import SortByPanel from "../SortByPanel";
import { productClusterPropInterface } from "../../../declare";

const CategorySegment = () => {
  const cluster1: productClusterPropInterface = {
    product1: {
      ProductName: "Draggy hose with droppy strings",
      rating: 4.3,
      imgSrc: "/assets/Dress/Co Fall 2019 Fashion Show.jpeg",
      price: 3300,
    },
    product2: {
      ProductName: "Fancy Blue Skirt",
      rating: 4.0,
      imgSrc: "/assets/Dress/Pinterest image (5).jpeg",
      price: 3500,
    },
  };
  const cluster2: productClusterPropInterface = {
    product1: {
      ProductName: "Organic Whitey Dress",
      rating: 4.2,
      imgSrc: "/assets/Dress/Maroon Silk.jpeg",
      price: 4300,
    },
    product2: {
      ProductName: "Weavy Weaver",
      rating: 4.3,
      imgSrc: "/assets/Dress/Pinterest image.jpeg",
      price: 6700,
    },
  };

  return (
    <>
      <div className="relative">
        <img src="/assets/weavyArch.svg" alt="wave" className="" />
        <div className="absolute z-10 top-60% ">
          <SortByPanel />
        </div>
      </div>
      <section
        className={` bg-bgLightBlue px-10vw py-5vh relative ${paddingForPage}`}
      >
        <h1 className=" text-primaryBlue text-3xl 3xl:text-5xl font-bold w-100% sm:w-70% xmd:w-70% mb-10vh">
          WE HAVE SOMETHING FOR EVERYONE
        </h1>
        <div id="container" className="grid space-y-16">
          <ProductCluster
            product1={cluster1.product1}
            product2={cluster1.product2}
          />
          <ProductCluster
            product1={cluster2.product1}
            product2={cluster2.product2}
          />
        </div>
      </section>
    </>
  );
};

export default CategorySegment;
