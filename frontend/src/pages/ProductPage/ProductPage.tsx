import { LikeBtn } from "../../SVG/LikeBtn";
import Star from "../../SVG/Star";
import { AddToCartButton, BuyNowBtn } from "../../components/Buttons/Buttons";
import {
  paddingForPage,
  priceTextSizeInPreviewPage,
  selectedColor,
} from "../../defineSize";

const ProductPage = () => {
  return (
    <div className={`bg-bgLightBlue py-4 sm:py-16 ${paddingForPage}`}>
      <div className="grid rrid-rows-2 sm:grid-cols-5">
        <div className="relative sm:col-span-2 h-70vh sm:h-60vh lg:h-70vh p-1 bg-bodybg rounded-sm shadow-customDown">
          <img
            src="/assets/Dress/Co Fall 2019 Fashion Show.jpeg"
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
                Dragy Hose with droppy strings and other stuffs too
              </h3>
            </div>
            <div className=" text-xs sm:text-base">
              <p className={` font-medium opacity-70 `}>
                Made with premium materials, this dress is not only comfortable
                but also durable, ensuring that you'll look and feel your best
                for years to come. Whether you're dressing up for a night out or
                layering it with leather and chains for a more casual look, this
                badass brown dress is a must-have for any fashion-forward
                wardrobe. Experience the ultimate combination of style and
                attitude with our latest luxury piece.
              </p>
            </div>
            <div id="rating" className="hidden sm:flex gap-4 items-baseline ">
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
              <h3 className={` text-sm sm:text-2xl 2xl:text-2xl`}>4.0</h3>
            </div>
            <div>
              <p className="hidden sm:inline-block font-semibold">
                Colors available
              </p>
              <div className="flex gap-2 items-center">
                <div
                  className={`h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-[#4A312A] ${selectedColor}`}
                ></div>
                <div className="h-6 w-6 sm:h-8 sm:w-8  rounded-full bg-[#487431]"></div>
                <div className="h-6 w-6 sm:h-8 sm:w-8  rounded-full bg-[#2E467D]"></div>
                <div className="h-6 w-6 sm:h-8 sm:w-8  rounded-full bg-[#537782]"></div>

                <div className=" ml-10% items-center gap-2 hidden sm:flex">
                  <div className="h-6 w-6 3xl:h-8 3xl:w-8 ">
                    <LikeBtn fillColor="#D9DFED" />
                  </div>
                  <div className={`${priceTextSizeInPreviewPage}`}>Like </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-100%  space-y-6 sm:space-y-8">
            <div className="flex items-center justify-between">
              <h3 id="price" className={`${priceTextSizeInPreviewPage}`}>
                NPR.3500
              </h3>
            </div>

            {/* <div className=" bg-black opacity-20 h-0.5 w-100% mb-2"></div> */}
            <div className="flex justify-between  items-center">
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
};

export default ProductPage;
