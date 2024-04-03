import CategorySegment from "./CategorySegment";
import HeroSegment from "./HeroSegment";

const Homepage = () => {
  return (
    <section className=" text-primaryBlue">
      <HeroSegment />
      <CategorySegment />
    </section>
  );
};

export default Homepage;
