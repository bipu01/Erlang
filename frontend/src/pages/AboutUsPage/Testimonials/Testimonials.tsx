import { testimonials } from "./testimonialCluster";

export default function Testimonials() {
  return (
    <div className=" flex flex-col gap-3 bg-bgLightBlue px-5 py-2 rounded-xl">
      {testimonials.map((testimonial, index) => (
        <div className=" my-1" key={index}>
          <div className="flex  gap-5 items-center ">
            <div className="max-w-10 max-h-10 overflow-hidden rounded-full">
              <img className="h-full w-full object-cover " src={testimonial.avatar} alt="avatar" />
            </div>
            <div className="">
              {/* connecting comment and the user name  */}
              <p className=" sm:font-medium xmd:text-xl">{`"${testimonial.comment}" - ${testimonial.name}`}</p>
            </div>
          </div>
            <div className=" bg-black opacity-60 w-full h-[1px]  mt-2"></div>
        </div>
      ))}
    </div>
  );
}
