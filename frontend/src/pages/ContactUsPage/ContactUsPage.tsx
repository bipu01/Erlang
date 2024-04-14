import { paddingForPage } from "../../defineSize";
import { Link } from "react-router-dom";

export default function ContactUsPage() {
  
  return (
    <div className={`bg-bodybg w-full h-screen pt-5 sm:grid sm:grid-cols-2 ${paddingForPage}`}>
      <div className=" flex flex-col gap-5 col-span-1">
        <div className="inline-block">
          <p className="text-xl sm:text-3xl text-primaryBlue font-semibold border-b-2 border-lineColor inline-block leading-relaxed">
            Have any Questions?
          </p>
        </div>
        <div className="">
          <p className="text-base sm:text-xl text-primaryBlue font-semibold">Send us a message here:</p>
            <form className="mt-4">
              <textarea className="w-full bg-bodybg rounded-md border-2 border-primaryBlue p-2 h-40" name="message" id="message"  placeholder="Type your message here..."></textarea>
              <button type="submit" className="mt-4 bg-primaryBlue text-white py-2 px-10 rounded-md font-semibold">Send </button>
            </form>
        </div>
        <div className="mt-5 sm:mt-10">
          <p className="text-base sm:text-xl text-primaryBlue font-semibold">Connect with us through our email:</p>
          <div className="inline-block">
            <p className="text-sm text-primaryBlue font-semibold opacity-60 border-b-2 border-lineColor">erlangcontactus@gmail.com</p>
          </div>
        </div>
        <div className="">
          <p className=" text-base sm:text-xl text-primaryBlue font-semibold py-2">Our social links</p>
          <div className=" ">
            <div className="">
              <Link to=''>
                <div className=" flex items-center  gap-3 py-1">
                  <div className="w-5 h-5 sm:w-7 sm:h-7 overflow-hidden ">
                    <img className=" w-full h-full object-cover" src="./icons/facebook.svg" alt="" />
                  </div>
                  <p className="text-sm text-primaryBlue font-semibold opacity-70">Facebook</p>
                </div>
              </Link>
              <Link to=''>
                <div className=" flex items-center  gap-3  py-1">
                  <div className="w-5 h-5 sm:w-7 sm:h-7 overflow-hidden ">
                    <img className=" w-full h-full object-cover" src="./icons/instagram.svg" alt="" />
                  </div>
                  <p className="text-sm text-primaryBlue font-semibold opacity-70">Instagram</p>
                </div>
              </Link>
              <Link to=''>
                <div className=" flex items-center  gap-3 py-1">
                  <div className="w-5 h-5 sm:w-7 sm:h-7 overflow-hidden ">
                    <img className=" w-full h-full object-cover" src="./icons/telegram.svg" alt="" />
                  </div>
                  <p className="text-sm text-primaryBlue font-semibold opacity-70">Telegram</p>
                </div>
              </Link>
              <Link to=''>
                <div className=" flex items-center  gap-3 py-1">
                  <div className="w-5 h-5 sm:w-7 sm:h-7 overflow-hidden ">
                    <img className=" w-full h-full object-contain" src="./icons/tiktok.svg" alt="" />
                  </div>
                  <p className="text-sm text-primaryBlue font-semibold opacity-70">Tiktok</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
