import { paddingForPage } from "../../../defineSize";
export default function HeroSegment() {
  // sideWhite Button Style
  const sideWhiteButtonStyle =
    "bg-bgLightBlue w-8 aspect-square rounded-full border-4 border-white sm:bg-bodybg sm:w-12 sm:h-10 sm:border-none";

  return (
    <div className={`  bg-bodybg  ${paddingForPage} `}>
      {/* main grid */}
      <div className=" grid sm:grid-cols-5  pt-8 pb-12">
        {/* left image */}
        <div className="col-span-4 sm:col-span-2 mt-5 sm:mt-0  max-h-40vh sm:max-h-95vh relative">
          <img
            className=" w-full h-full object-cover object-top  "
            src="./assets/Dress/Co Fall 2019 Fashion Show.jpeg"
            alt=""
          />
          <div className=" absolute top-16 flex flex-col gap-44 sm:gap-64 xl:gap-96 -right-3 sm:-right-4">
            <div className={`${sideWhiteButtonStyle}`}></div>
            <div className={`${sideWhiteButtonStyle}`}></div>
          </div>
        </div>
        {/* right contents */}
        <div className=" col-span-3 grid sm:grid-rows-5 lg:grid-rows-2 sm:ml-5">
          <div className="sm:row-span-3 lg:row-span-1  grid grid-flow-col  sm:grid-rows-2 order-last sm:order-none">
            <div className="">
              <p className="text-4xl absolute  top-12 sm:relative sm:top-0 :text-4xl text-primaryBlue font-bold  leading-normal tracking-wider ">
                CRAFTED FOR THE{" "}
                <span className=" text-bodybg sm:text-primaryBlue">
                  DISCERNING INDIVIDUAL
                </span>
              </p>
            </div>
            <div className="">
              <p className="mt-6 sm:mt-auto xmd:text-xl xl:text-2xl text-primaryBlue opacity-70">
                "Experience the ultimate in luxury and comfort with our
                handcrafted clothing, tailored to your unique measurements and
                preferences."
              </p>
            </div>
            {/* <div className="sm:row-span-1 lg:hidden"></div> */}
          </div>
          <div className="sm:row-span-2 lg:row-span-1 grid grid-cols-2 gap-4 xmd:gap-6 mt-2 sm:mt-0 ">
            <div className=" ">
              <img
                className="h-full w-full object-cover"
                src="./assets/image2.png"
                alt="Image"
              />
            </div>
            <div className="">
              <img
                className="h-full w-full object-cover"
                src="./assets/image3.png"
                alt="Image"
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" flex gap-4 sm:gap-8  sm:mt-0">
        <div className="">
          <button className="bg-primaryBlue text-white py-4 w-45vw sm:w-48 sm:px-6 shadow-lg rounded-md font-semibold text-sm sm:text-lg">
            Browse
          </button>
        </div>
        <div className="">
          <button className="bg-bodybg text-primaryBlue py-4 w-45vw sm:w-48 sm:px-6 shadow-lg  rounded-md font-semibold text-sm sm:text-lg">
            Watch Video
          </button>
        </div>
      </div>
    </div>
  );
}
