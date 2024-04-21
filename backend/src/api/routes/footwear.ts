import express from "express"
import getFeaturedProducts from "../controllers/common/getFeaturedProducts";
import getAllProducts from "../controllers/common/getAllProducts";

const footwearRouter = express.Router()

footwearRouter.route("/getFeatured").get(getFeaturedProducts);
footwearRouter.route("/getAll").get(getAllProducts);

export default footwearRouter