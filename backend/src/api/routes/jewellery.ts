import express from "express"
import getFeaturedProducts from "../controllers/common/getEveryFeatured";
import getAllProducts from "../controllers/common/getAllProductCategory";
// import getAllJewellery from "../controllers/jewellery/getAllJewellery";
// import getFeaturedJewellery from "../controllers/jewellery/getFeaturedJewellery";

const jewelleryRouter = express.Router()

jewelleryRouter.route("/getAll").get(getAllProducts);
jewelleryRouter.route("/getFeatured").get(getFeaturedProducts)

export default jewelleryRouter