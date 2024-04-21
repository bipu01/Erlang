// import { Outlet } from "react-router-dom";
import CategorySegment from "./CategorySegment";
import HeroSegment from "./HeroSegment";

const Homepage = () => {
  return (
    <section className=" text-primaryBlue overflow-x-hidden bg-bodybg">
      <HeroSegment />
      <CategorySegment />
      {/* <main>
        <Outlet />
      </main> */}
    </section>
  );
};

export default Homepage;
