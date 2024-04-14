import { Link } from "react-router-dom";
import { paddingForPage } from "../../defineSize";
import Cart from "./Cart";

export default function CartPage() {
  return (
    <div className={`bg-bgLightBlue w-screen h-screen overflow-y-scroll  ${paddingForPage}`}>
      <div className="flex flex-col gap-4 sm:gap-6 xmd:gap-8 ">
        <div className=" h-5 w-5 sm:h-8 sm:w-8 py-3 sm:py-8"> 
          <Link to="/"><img className="w-full h-auto object-cover" src="./icons/back.svg" alt="" /> </Link>
        </div>
        <div className=" ">
          <Cart/>
        </div>
      </div>
    </div>
  );
}
