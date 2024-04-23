import { useEffect } from "react";
import ScrollToTop from "../../Functions/ScrollToTop";
import { LikeBtn } from "../../SVG/LikeBtn";
import Star from "../../SVG/Star";
import { AddToCartButton, BuyNowBtn } from "../../components/Buttons/Buttons";
import { paddingForPage, priceTextSizeInPreviewPage } from "../../defineSize";
// import { individualProduct } from "../../declare";
import { product, rootStore } from "../../store/type";
import { useSelector } from "react-redux";
// import { useSelector } from "react-redux";

const ProductPage = () => {
  // const [img, setImg] = useState("");

  const openedPost: product = useSelector(
    (state: rootStore) => state.openedPost[0]
  );

  const printPreviewPage = () => {
    if (openedPost) {
      return (
        <div className={`bg-bgLightBlue py-4 sm:py-16 ${paddingForPage}`}>
          <ScrollToTop />
          <div className="grid grid-rows-2 sm:grid-cols-5">
            <div className="relative sm:col-span-2 h-60vh lg:h-70vh p-1 bg-bodybg rounded-sm shadow-customDown">
              <img
                src={openedPost.img1}
                alt="productImage"
                className="w-100% h-100% object-cover rounded-sm"
              />

              {/* likeBtn */}
              <div className="h-8 w-8 absolute sm:hidden bottom-5 right-5">
                <LikeBtn fillColor="#D9DFED" borderThickness={1} />
              </div>
            </div>

            <div className=" sm:col-span-3 pt-5 sm:pt-0 sm:pl-8 flex flex-col justify-between">
              <div className=" space-y-5% mb-5% sm:mb-10%">
                <div>
                  <h3
                    className={`relative font-medium sm:font-semibold z-20 whitespace-normal text-lg sm:text-2xl lg:text-2xl 2xl:text-4xl `}
                  >
                    {openedPost.name || `Heading Loading...`}
                  </h3>
                </div>
                <div className=" text-xs sm:text-base">
                  <p className={` font-medium opacity-70 line-clamp-5`}>
                    {openedPost.desc || `Description loading....`}
                  </p>
                </div>
                <div
                  id="rating"
                  className="hidden sm:flex gap-4 items-baseline "
                >
                  <div className="flex gap-2">
                    <Star custom="h-5 w-5 sm:h-7 sm:w-7 2xl:h-8  2xl:w-8" />
                    <Star custom="h-5 w-5 sm:h-7 sm:w-7 2xl:h-8  2xl:w-8" />
                    <Star custom="h-5 w-5 sm:h-7 sm:w-7 2xl:h-8  2xl:w-8" />
                    <Star custom="h-5 w-5 sm:h-7 sm:w-7 2xl:h-8  2xl:w-8" />
                    <Star
                      custom="h-5 w-5 sm:h-7 sm:w-7 2xl:h-8  2xl:w-8"
                      fillColor="#D9DFED"
                    />
                  </div>
                  <h3 className={` text-sm sm:text-2xl 2xl:text-2xl`}>
                    {openedPost.ratingRate}
                  </h3>
                </div>
              </div>

              <div className="w-100%  space-y-6 sm:space-y-8">
                <div className="flex items-center justify-between">
                  <h3 id="price" className={`${priceTextSizeInPreviewPage}`}>
                    Rs.{openedPost.priceCurrent || `Price Loading...`}
                  </h3>
                </div>

                {/* <div className=" bg-black opacity-20 h-0.5 w-100% mb-2"></div> */}
                <div className="flex justify-between  items-center">
                  <div className="items-center gap-2 hidden sm:block h-10 w-10 3xl:h-12 3xl:w-12 hover:cursor-pointer">
                    <LikeBtn fillColor="#D9DFED" borderThickness={1} />
                  </div>
                  <BuyNowBtn darkBg={true} text="Buy now" primary={true} />
                  <AddToCartButton
                    darkBg={false}
                    text="Add to cart"
                    primary={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <div>Something went wrong</div>;
    }
  };

  useEffect(() => {
    printPreviewPage();
  }, []);

  return printPreviewPage();
};

export default ProductPage;
