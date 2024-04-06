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
      <div className="grid grid-cols-5">
        <div className=" col-span-2 h-60vh lg:h-70vh p-1 bg-bodybg rounded-sm shadow-customDown">
          <img
            src="/assets/Dress/Co Fall 2019 Fashion Show.jpeg"
            alt="productImage"
            className="w-100% h-100% object-cover rounded-sm"
          />
        </div>

        <div className=" col-span-3 pl-8 flex flex-col justify-between">
          <div className=" space-y-5% mb-10%">
            <div>
              <h3
                className={`relative font-semibold z-20 whitespace-normal text-sm sm:text-2xl lg:text-2xl 2xl:text-4xl `}
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
            <div id="rating" className="flex gap-4 items-baseline ">
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
              <p className=" font-semibold">Colors available</p>
              <div className="flex gap-2 items-center">
                <div
                  className={`h-4 w-4 rounded-full bg-[#4A312A] ${selectedColor}`}
                ></div>
                <div className="h-4 w-4 sm:h-6 sm:w-6  rounded-full bg-[#487431]"></div>
                <div className="h-4 w-4 sm:h-6 sm:w-6  rounded-full bg-[#2E467D]"></div>
                <div className="h-4 w-4 sm:h-6 sm:w-6  rounded-full bg-[#537782]"></div>

                <div className="flex ml-10% items-center gap-2">
                  <div className="h-6 w-6 3xl:h-8 3xl:w-8 ">
                    <LikeBtn fillColor="#D9DFED" />
                  </div>
                  <div className={`${priceTextSizeInPreviewPage}`}>Like </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-100%  space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 id="price" className={`${priceTextSizeInPreviewPage}`}>
                  NPR.3500
                </h3>
              </div>
            </div>

            {/* <div className=" bg-black opacity-20 h-0.5 w-100% mb-2"></div> */}
            <div className="flex justify-between  items-center">
              <BuyNowBtn text="Buy now" primary={true} />
              <AddToCartButton text="Add to cart" primary={false} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
