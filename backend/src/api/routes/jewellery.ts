import getAllJewellery from "../controllers/jewellery/getAllJewellery";
import getFeaturedJewellery from "../controllers/jewellery/getFeaturedJewellery";
import express from "express"

const jewelleryRouter = express.Router()

jewelleryRouter.route("/getAll").get(getAllJewellery);
jewelleryRouter.route("/getFeatured").get(getFeaturedJewellery)

export default jewelleryRouter