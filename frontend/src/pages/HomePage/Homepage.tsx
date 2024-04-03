import CategorySegment from "./CategorySegment";
import HeroSegment from "./HeroSegment";
// import HeroSegment from "./HeroSegment";

const Homepage = () => {
  return (
    <section className=" text-primaryBlue overflow-x-hidden">
      <HeroSegment />
      <CategorySegment />
    </section>
  );
};

export default Homepage;
