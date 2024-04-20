import express from "express"
import getFeaturedProducts from "../controllers/common/getFeaturedProducts";
import getAllProducts from "../controllers/common/getAllProducts";
// import getAllJewellery from "../controllers/jewellery/getAllJewellery";
// import getFeaturedJewellery from "../controllers/jewellery/getFeaturedJewellery";

const jewelleryRouter = express.Router()

jewelleryRouter.route("/getAll").get(getAllProducts);
jewelleryRouter.route("/getFeatured").get(getFeaturedProducts)

export default jewelleryRouter