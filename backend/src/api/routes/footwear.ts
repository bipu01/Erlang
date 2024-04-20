import getAllFootwear from "../controllers/footwear/getAllFootwear";
import getFeaturedFootwear from "../controllers/footwear/getFeaturedFootwear"
import express from "express"

const footwearRouter = express.Router()

footwearRouter.route("/getFeatured").get(getFeaturedFootwear);
footwearRouter.route("/getAll").get(getAllFootwear);

export default footwearRouter