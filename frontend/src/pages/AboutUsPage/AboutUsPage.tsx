import Testimonials from "./Testimonials"

export default function AboutUsPage() {
  return (
    <>
    <div className=" pt-20 px-2 sm:px-10 bg-bodybg h-full">
      <div className=" px-4 xm:px-16 mt-2 mb-5">
        <div className="">
          <p className=" text-5xl text-primaryBlue font-bold py-2 text-center">About us</p>
          <div className=" bg-black opacity-60 w-full h-[1px] sm:h-[2px] "></div>
        </div>
        <div className=" w-full py-4">
          <p className=" text-xl  xmd:text-2xl text-primaryBlue break-words">Erlang Fashion Store is your premier destination for stylish clothing that combines quality, sustainability, and exceptional customer service. With a diverse selection of on-trend apparel, we cater to fashion-forward individuals who value both style and ethical practices. From chic everyday essentials to statement pieces, each garment is thoughtfully curated to elevate your wardrobe while minimizing environmental impact. Experience the perfect blend of fashion and conscience with Erlang Fashion Store.</p>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-10">
        <div className="bg-white  shadow-2xl px-10 py-10 rounded-xl">
          <div className="">
            <p className=" text-3xl sm:text-2xl xmd:4xl text-primaryBlue font-bold text-center ">Our Brand Integrity</p>
            <div className=" bg-black opacity-60 w-full h-[1px] sm:h-[2px] "></div>
          </div>
          <div className=" my-2">
            <p className="text-sm sm:text-xl xmd:text-2xl text-primaryBlue break-words">Erlang Fashion Store stands out amidst competitors for its unwavering commitment to quality, sustainability, and unparalleled customer service. We meticulously select each garment, ensuring it meets our stringent standards for both style and durability. Moreover, sustainability is at the forefront of our operations; we prioritize eco-friendly materials and ethical manufacturing practices. Our unique product offerings reflect the latest fashion trends while maintaining timeless appeal, catering to diverse tastes and preferences. With exceptional customer service, we strive to exceed expectations, fostering long-lasting relationships built on trust and satisfaction.</p>
          </div>
        </div>
        <div className="bg-white  shadow-2xl px-10 py-10 rounded-xl">
          <div className="">
            <p className=" text-3xl sm:text-2xl xmd:4xl text-primaryBlue font-bold  text-center">Our community involvement</p>
            <div className=" bg-black opacity-60 w-full h-[1px] sm:h-[2px] "></div>
          </div>
          <div className=" my-2">
            <p className="text-sm sm:text-xl xmd:text-2xl text-primaryBlue break-words">At Erlang Fashion Store, we believe in giving back to the community and making a positive impact beyond the world of fashion. That's why we're proud to be involved in various philanthropic and environmental initiatives.One of our key partnerships is with a local charity organization that focuses on providing clothing and support to families in need. Through this partnership, we regularly donate clothing items and contribute to fundraising efforts to support their mission.One of our key partnerships is with a local charity organization that focuses on providing clothing and support to families in need. Through this partnership, we regularly donate clothing items and contribute to fundraising efforts to support their mission.</p>
          </div>
        </div>
      </div>
      {/* Testimonials */}
      <div className="">
          <div className=" py-8 mt-8">
            <p className=" text-5xl text-primaryBlue font-bold py-2 text-center">Testimonials</p>
            <div className=" bg-black opacity-60 w-full h-[1px] sm:h-[2px] "></div>
          </div>
          <div className="">
            <Testimonials/>
          </div>
      </div>
      {/* Our Journey */}
      <div className=" pb-10">
        <div className="  py-8 mt-8">
          <p className=" text-5xl text-primaryBlue font-bold py-2 text-center">Our Journey</p>
          <div className=" bg-black opacity-60 w-full h-[1px] sm:h-[2px] "></div>
        </div>
        <div className="">
          <p className="">In the digital landscape, Erlang Fashion Store emerged, founded with a vision by fashion enthusiasts. Their mission: to offer trendy attire that elevates style effortlessly. Rooted in innovation and elegance, Erlang Fashion Store isn't just a platform—it's a destination for fashion-forward individuals seeking curated collections. Whether browsing for the latest trends or timeless classics, customers find themselves immersed in a world where quality meets style, all with the convenience of online shopping.</p>
        </div>
      </div>
    </div>
    </>
  )
}
