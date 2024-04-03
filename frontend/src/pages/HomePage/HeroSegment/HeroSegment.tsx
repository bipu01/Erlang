const HeroSegment = () => {
  return (
    <div>
      <div className=" bg-bodybg h-100vh pt-10">
        <div className=" flex flex-col sm:flex-row">
          {/* leftSide */}
          <div className=" flex">
            <div className=" w-full h-45vh mx-10 relative">
              <img
                className=" h-full w-full xmd:w-35vw  xmd:h-70vh object-cover  object-top"
                src="../assets/image1.png"
                alt=""
              />
              {/* <div className="bg-red-500 h-10 w-10 "></div> */}
            </div>
          </div>
          {/* rightSide */}
          <div className="">
            <div className="">
              <div className=" text-4xl xmd:text-6xl xl:text-7xl">
                <p className="font-semibold text-primaryBlue ">
                  CRAFTED FOR THE
                </p>
                <p className=" text-white xmd:text-primaryBlue xmd:font-semibold">
                  DISCERNING{" "}
                </p>
                <p className=" text-white xmd:text-primaryBlue xmd:font-semibold">
                  INDIVIDUAL
                </p>
              </div>
            </div>
            <div className=" text-xl text-primaryBlue opacity-80">
              <p>
                "Experience the ultimate in luxury and comfort with our
                handcrafted clothing, tailored to your unique measurements and
                preferences."
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* this is test */}
    </div>
  );
};

export default HeroSegment;
