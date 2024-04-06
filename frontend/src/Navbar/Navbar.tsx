import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" sticky top-0 z-50">
      <div className="  flex justify-around sm:justify-between items-center pt-1 px-2 sm:px-5 md:px-10 bg-bodybg">
        <div className="">
          <img
            className=" h-9 aspect-square sm:h-16"
            src="./assets/logo.svg"
            alt=""
          />
        </div>
        {/* navlinks */}
        <div className="flex gap-4 text-sm font-medium sm:text-xl xmd:text-2xl sm:gap-10 sm:font-normal items-center">
          <div className="">
            <Link to="/">Home</Link>
          </div>
          <div className="">
            <Link to="/contactUs">Contact us</Link>
          </div>
          <div className="">
            <Link to="/aboutUs">About us</Link>
          </div>
          <div className="">
            <Link to="/cart">
              <div className="flex gap-1 items-center">
                <p>Cart</p>
                <div className=" relative">
                  <img className="h-3 sm:h-6" src="./assets/cart.svg" alt="" />
                  <span className="absolute bg-red-500 rounded-full h-3 aspect-square text-[10px]  flex items-center justify-center -top-2 -right-1 sm:text-xl sm:h-6 sm:-top-4 sm:-right-2 ">
                    2
                  </span>
                </div>
              </div>
            </Link>
          </div>
          <div className="">
            <Link to="/login">
              <img
                className="h-7 aspect-square sm:h-12"
                src="./assets/userr.svg"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
      <div className=" flex justify-center">
        <div className=" bg-black opacity-60 w-[95%] h-[1px] sm:h-[2px] "></div>
      </div>
    </div>
  );
};

export default Navbar;
