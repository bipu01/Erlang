import { cartItems } from "./cartCluster";

export default function Cart() {
  return (
    <div className="">
      <div className="">
        {cartItems.map((item, index) => (
          <div key={index} className="w-full h-full grid grid-cols-4 sm:grid-cols-5 bg-bodybg rounded-lg   my-2">
            <div className="col-span-1 p-1 sm:p-2">
                <div className=" w-full aspect-square rounded-md overflow-hidden">
                  <img className=" w-full h-full object-cover object-top" src={`${item.image}`} alt="" />
                </div>
            </div>
            <div className=" col-span-3 sm:col-span-4 flex flex-col gap-1 pl-5 p-1  sm:gap-3 sm:p-2">
                <div className="">
                  <p className=" text-xs sm:text-xl xmd:text-2xl text-primaryBlue font-semibold">{item.name}</p>
                </div>

                <div className="">
                  <div id="stars" className="flex gap-2 items-baseline">
                    <div id="stars" className="flex">
                      <img src="/icons/filledStar.svg" alt="" className=" sm:h-6" />
                      <img src="/icons/filledStar.svg" alt="" className=" sm:h-6" />
                      <img src="/icons/filledStar.svg" alt="" className=" sm:h-6" />
                      <img src="/icons/filledStar.svg" alt="" className=" sm:h-6" />
                      <img src="/icons/unfilledStar.svg" alt="" className=" sm:h-6" />
                    </div>
                  </div>
                </div>
                <div className="flex  items-center gap-4 ">
                  <div className="">
                    <p className="text-xs sm:text-xl xmd:text-2xl text-primaryBlue font-semibold">Color</p>
                  </div>
                  <div className={` h-4 w-4 sm:h-6 sm:w-6 rounded-full bg-${item.color} border-2 border-yellow-200`}></div>
                </div>

                <div className=" grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-8 items-center">
                  {/* quantity increase and decrease */}
                  <div className=" flex justify-around">
                    <button className=" font-extrabold sm:text-2xl">-</button>
                    <p className="text-xs sm:text-base xmd:text-xl flex items-center rounded-md border-2 px-3 bg-bgLightBlue">{item.quantity}</p>
                    <button className=" font-extrabold sm:text-2xl">+</button>
                  </div>
                  {/* item original and discount price */}
                  <div className=" sm:col-span-2 text-xs sm:text-base xmd:text-xl flex text-primaryBlue font-semibold justify-center">
                    <p>NPR.</p>
                    <div className="flex gap-1 sm:gap-2">
                      <p className=" line-through opacity-65">{item.orgPrice}</p>
                      <p>{item.disPrice}</p>
                    </div>
                  </div>
                  <div className="">
                    <button className=" bg-primaryBlue text-white  rounded-md text-xs sm:text-base xmd:text-xl py-1 sm:py-2 px-3 sm:px-5">Buy now</button>
                  </div>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
