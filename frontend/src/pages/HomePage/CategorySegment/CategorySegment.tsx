import ScrollToPreviousPosition from "../../../Frunctions/ScrollToPreviousPosition";
import Dresses from "./Dresses";
import Footwear from "./Footwear";
import Jewellery from "./Jewellery";

const CategorySegment = () => {
  const categoryContainer = document.getElementById("categoryContainer");
  return (
    <>
      <ScrollToPreviousPosition object={categoryContainer} />
      <div id="categoryContainer">
        <Dresses />
        <Jewellery />
        <Footwear />
      </div>
    </>
  );
};

export default CategorySegment;
