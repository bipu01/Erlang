import { useState } from "react";
import { Link } from "react-router-dom";

export default function Hamburger() {
  const [show, setShow] = useState<boolean>(false);
  // const displayRef = useRef<HTMLDivElement>(null);

  // const checkoutsideBox = (e: MouseEvent) => {
  //     if (show && displayRef.current && !displayRef.current.contains(e.target as Node)) {
  //         setShow(false);
  //     }
  // };

  // useEffect(() => {
  //     document.addEventListener('mousedown', checkoutsideBox);
  // });

  // Define an array of menu items
  const menuItems = [
    { link: "/", icon: "/icons/back.png", text: "" },
    { link: "/product", icon: "/icons/fav.png", text: "Favorites" },
    { link: "/contactUs", icon: "/icons/email.png", text: "Contact us" },
    { link: "/aboutUs", icon: "/icons/about2.png", text: "About us" },
    { link: "/", icon: "/icons/profile.png", text: "Profile" },
    { link: "/cart", icon: "/icons/tick.png", text: "My orders" },
    { link: "/login", icon: "/icons/logout.png", text: "Logout" },
  ];

  return (
    <>
      {/* Hamburger */}
      <div
        className="flex flex-col gap-1 xmd:gap-2 cursor-pointer relative"
        onClick={() => setShow(!show)}
      >
        <div className="bg-primaryBlue w-8 h-0.5 rounded-xl"></div>
        <div className="bg-primaryBlue w-8 h-0.5 rounded-xl"></div>
        <div className="bg-primaryBlue w-8 h-0.5 rounded-xl"></div>
      </div>
      {/* lists */}
      <div
        className={`text-sm flex flex-col gap-4 font-semibold sm:text-xl w-64 p-5 absolute right-0 top-14 shadow-2xl bg-bodybg ${
          show ? "block" : "hidden"
        }`}
      >
        {menuItems.map((item, index) => (
          <div className="" key={index}>
            <Link to={item.link}>
              <div className=" flex gap-3 pb-2">
                <img className=" h-5 w-5" src={item.icon} alt="" />
                <p>{item.text}</p>
              </div>
            </Link>
            {index !== menuItems.length - 1 && (
              <div className="bg-lineColor w-90% h-[1.5px] rounded-xl"></div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
