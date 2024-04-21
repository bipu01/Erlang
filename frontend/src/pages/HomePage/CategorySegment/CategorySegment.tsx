import { useEffect } from "react";
import Dresses from "./Dresses";
import Footwear from "./Footwear";
import Jewellery from "./Jewellery";
import axios from "axios";
import config from "../../../config/config";

const CategorySegment = () => {
  const getAllFeaturedProducts = async () => {
    const allFeaturedProducts = await axios.get(
      config.backendURL + "getEveryFeatured/"
    );

    console.log(allFeaturedProducts.data.featuredDressCluster);
  };

  useEffect(() => {
    getAllFeaturedProducts();
  }, []);

  return (
    <>
      <div id="categoryContainer">
        <Dresses />
        <Jewellery />
        <Footwear />
      </div>
    </>
  );
};

export default CategorySegment;
