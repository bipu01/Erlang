const HeroSegment = () => {
  return <div>
    <div className=" bg-bodybg h-100vh pt-10">
      <div className=" flex flex-col sm:flex-row gap-10 mx-4 sm:mx-16 ">
        {/* leftSide */}
        <div className=" flex relative">
          <div className=" w-full h-45vh mt-5 sm:mt-0 relative sm:min-w-35vw sm:min-h-70vh xmd:h-70vh">
            <img className=" h-full w-full  object-cover  object-top" src="../assets/image1.png" alt="" />
          </div>
          <div className="flex flex-col gap-44 sm:gap-80 xl:gap-96 absolute -right-4 sm:-right-6 top-20 sm:top-12">
            <div className=" w-8 aspect-square sm:w-14 sm:h-9 bg-bgLightBlue sm:bg-white  rounded-full sm:rounded-3xl border-4 border-white sm:border-none"></div>
            <div className=" w-8 aspect-square sm:w-14 sm:h-9 bg-bgLightBlue sm:bg-white  rounded-full sm:rounded-3xl border-4 border-white sm:border-none"></div>
          </div>
        </div>
        {/* rightSide */}
        <div className=" xmd:pl-5 flex flex-col-reverse sm:flex sm:flex-col">
          <div className="absolute top-16 sm:relative sm:top-0">
            <div className="text-4xl  sm:text-2xl xmd:text-3xl xl:text-4xl space-y-3 xl:space-y-4 ">
                <p className="font-semibold text-primaryBlue">CRAFTED FOR THE</p>
              <div className="flex flex-col sm:flex-row gap-3 ">
                <p className="text-white sm:text-primaryBlue xmd:font-semibold">DISCERNING </p>
                <p className="text-white sm:text-primaryBlue xmd:font-semibold">INDIVIDUAL</p>
              </div>
            </div>
          </div>
          <div className=" text-sm sm:text-2xl text-primaryBlue opacity-80 mt-4 xl:mt-9">
            <p>"Experience the ultimate in luxury and comfort with our handcrafted clothing, tailored to your unique measurements and preferences."</p>
          </div>
          {/* images part */}
          <div className=" flex gap-3 sm:gap-10  -mt-8 sm:mt-5 xl:mt-10">
            <div className="w-1/2 aspect-square sm:max-h-40vh sm:max-w-20vw">
              <img className=" h-full w-full  object-cover  object-top" src="../assets/image2.png" alt="" />
            </div>
            <div className="w-1/2 aspect-square sm:max-h-40vh sm:max-w-20vw">
              <img className="w-full h-full object-cover object-top" src="./assets/image3.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className=" flex mx-2 sm:mx-16 mt-2 sm:mt-8 gap-10 sm:gap-12">
        <div className=" bg-primaryBlue text-white py-3 px-1 rounded-sm w-36 text-center">
          <button>Browse</button>
        </div>
        <div className=" font-bold text-primaryBlue py-3 px-1 rounded-sm w-36 text-center">
          <button>Watch Video</button>
        </div>
      </div>
    </div>
  </div>;

  
};

export default HeroSegment;
