import { useSelector } from "react-redux";
import PageBreakLine from "../../../../components/PageBreakLine";
import { ProductCluster } from "../../../../components/ProductCard/ProductCluster";
import { paddingForProductCard } from "../../../../defineSize";
import SortByPanel from "../../SortByPanel";
import { rootStore } from "../../../../store/type";
import { productClusterProp } from "../../../../declare";

const Dresses = () => {
  const allFeaturedDress = useSelector(
    (state: rootStore) => state.allFeaturedDress[0]
  );

  const printProductCluster = () => {
    //It just consoles log the allFeaturedDress from GlobalState in redux toolkit
    if (allFeaturedDress) {
      console.log({ "allFeaturedDress": allFeaturedDress });

      for (let i = 0; i < allFeaturedDress.length; i += 2) {
        const pairs: productClusterProp = {
          leftRow: {
            _id: allFeaturedDress[i]._id,
            name: allFeaturedDress[i].name,
            desc: allFeaturedDress[i].description,
            ratingRate: allFeaturedDress[i].rating.rate,
            ratingCount: allFeaturedDress[i].rating.count,
            priceOriginal: allFeaturedDress[i].price.original,
            priceCurrent: allFeaturedDress[i].price.current,
            img1: allFeaturedDress[i].image.image1,
            img2: allFeaturedDress[i].image.image2,
            img3: allFeaturedDress[i].image.image3,
          },
          rightRow: {
            _id: allFeaturedDress[i + 1]._id,
            name: allFeaturedDress[i + 1].name,
            desc: allFeaturedDress[i + 1].description,
            ratingRate: allFeaturedDress[i + 1].rating.rate,
            ratingCount: allFeaturedDress[i + 1].rating.count,
            priceOriginal: allFeaturedDress[i + 1].price.original,
            priceCurrent: allFeaturedDress[i + 1].price.current,
            img1: allFeaturedDress[i + 1].image.image1,
            img2: allFeaturedDress[i + 1].image.image2,
            img3: allFeaturedDress[i + 1].image.image3,
          },
        };

        console.log({ "pairs": pairs });
        return (
          <ProductCluster
            key={pairs.leftRow._id}
            color="blue"
            leftRow={pairs.leftRow}
            rightRow={pairs.rightRow}
          />
        );
      }
      return <div>Something went wrong</div>;
    }
  };

  return (
    <>
      <div className="relative mt-7vh">
        <img src="/assets/weavyArch.svg" alt="wave" className="w-100vw" />
        <div className="absolute z-10 top-60% ">
          <SortByPanel />
        </div>
      </div>
      <section
        id="dresses"
        className={` bg-bgLightBlue px-10vw py-5vh relative ${paddingForProductCard} mb-20vh`}
      >
        <h1 className=" text-primaryBlue text-3xl 3xl:text-5xl font-bold w-100% sm:w-70% xmd:w-70% mb-10vh">
          WE HAVE SOMETHING FOR EVERYONE
        </h1>
        <div id="container" className="grid space-y-16 ">
          {printProductCluster()}
          {/* <ProductCluster
            color="blue"
            leftRow={Dressluster2.leftRow}
            rightRow={Dressluster2.rightRow}
          /> */}
        </div>
      </section>
      <PageBreakLine />
    </>
  );
};

export default Dresses;
