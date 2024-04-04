import { paddingForPage } from "../../../defineSize"
export default function HeroSegment() {
  // sideWhite Button Style 
  const sideWhiteButtonStyle ="bg-bgLightBlue w-8 aspect-square rounded-full border-4 border-white sm:bg-bodybg sm:w-12 sm:h-10 sm:border-none";


  return (
    <div className={`  bg-bodybg  ${paddingForPage}`}>
      {/* main grid */}
      <div className=" grid sm:grid-cols-5  py-8 ">
        {/* left image */}
        <div className="col-span-4 sm:col-span-2 mt-5 sm:mt-0  max-h-90vw relative">
            <img className=" w-full h-full object-cover object-top" src="./assets/image1.png " alt="" />
            <div className=" absolute top-16 flex flex-col gap-30vh sm:gap-40vh -right-3 sm:-right-4">
              <div className={`${sideWhiteButtonStyle}`}></div>
              <div className={`${sideWhiteButtonStyle}`}></div>
            </div>
        </div>
        {/* right contents */}
        <div className=" col-span-3 grid grid-rows-2 sm:ml-5">
          <div className=" grid grid-flow-col  sm:grid-rows-2 order-last sm:order-none">
            <div className="">
              <p className="text-4xl absolute top-14 sm:relative sm:top-0 sm:text-4xl xl:text-5xl text-primaryBlue font-extrabold  xl:leading-normal">CRAFTED FOR THE <span className=" text-bodybg sm:text-primaryBlue">DISCERNING INDIVIDUAL</span></p>
            </div>
            <div className="">
              <p className="xmd:text-xl xl:text-2xl text-primaryBlue opacity-70">"Experience the ultimate in luxury and comfort with our handcrafted clothing, tailored to your unique measurements and preferences."</p>
            </div>
          </div>
          <div className=" grid grid-cols-2 gap-4 xmd:gap-6 mt-2 sm:mt-0 ">
            <div className=" ">
              <img className="h-full w-full object-contain" src="./assets/image2.png" alt="Image" />
            </div>
            <div className="">
              <img className="h-full w-full object-contain" src="./assets/image3.png" alt="Image" />
            </div>
          </div>
        </div>
      </div>
      <div className=" flex gap-8 -mt-40 sm:mt-0">
        <div className="">
          <button className="bg-primaryBlue text-white py-4 px-12  rounded-md font-semibold text-sm sm:text-xl">Browse</button>
        </div>
        <div className="">
          <button className="bg-bodybg text-primaryBlue py-4 px-12  rounded-md font-semibold text-sm sm:text-xl">Watch Video</button>
        </div>
      </div>
    </div>
  )
}
