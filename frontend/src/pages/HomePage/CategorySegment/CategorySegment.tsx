import Dresses from "./Dresses";
import Footwear from "./Footwear";
import Jewellery from "./Jewellery";
import axios from "axios";
import config from "../../../config/config";
import { useDispatch } from "react-redux";
import { addDress } from "../../../store/dressFeaturedSlice";
import { addJewellery } from "../../../store/jewelleryFeaturedSlice";
import { addFootwear } from "../../../store/footwearFeaturedSlice";
import { useEffect } from "react";

const CategorySegment = () => {
  const dispatchDress = useDispatch();
  const dispatchJewellery = useDispatch();
  const dispatchFootwear = useDispatch();

  const getAllFeaturedProducts = async () => {
    const alFeaturedlDress = await axios.get(
      config.backendURL + "getEveryFeatured/"
    );
    const allFeaturedJewellery = await axios.get(
      config.backendURL + "getEveryFeatured/"
    );
    const allFeaturedFootwear = await axios.get(
      config.backendURL + "getEveryFeatured/"
    );

    dispatchDress(addDress(alFeaturedlDress.data.featuredDressCluster));

    dispatchJewellery(
      addJewellery(allFeaturedJewellery.data.featuredJewelleryCluster)
    );
    dispatchFootwear(
      addFootwear(allFeaturedFootwear.data.featuredFootwearCluster)
    );
  };

  useEffect(() => {
    getAllFeaturedProducts();
    sessionStorage.setItem(
      "lastVisitedPage",
      JSON.stringify(window.location.href)
    );
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
