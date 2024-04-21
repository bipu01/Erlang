// import ScrollToPreviousPosition from "../../../Functions/ScrollToPreviousPosition";
import { useEffect } from "react";
import Dresses from "./Dresses";
import Footwear from "./Footwear";
import Jewellery from "./Jewellery";
import axios from "axios";
import config from "../../../config/config";

const CategorySegment = () => {
  // const categoryContainer = document.getElementById("categoryContainer");
  const getAllFeaturedProducts = async () => {
    const allFeaturedProducts = await axios.get(
      config.backendURL + "getEveryFeatured/"
    );

    console.log({
      "featuredDress": allFeaturedProducts.data.featuredDressList,
      "featuredJewellery": allFeaturedProducts.data.featuredJewelleryList,
      "featuredFootwear": allFeaturedProducts.data.featuredFootwearList,
    });
  };

  useEffect(() => {
    getAllFeaturedProducts();
  }, []);

  return (
    <>
      {/* <ScrollToPreviousPosition object={categoryContainer} /> */}
      <div id="categoryContainer">
        <Dresses />
        <Jewellery />
        <Footwear />
      </div>
    </>
  );
};

export default CategorySegment;
