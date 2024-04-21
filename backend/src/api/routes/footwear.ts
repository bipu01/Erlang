import express from "express"
import getFeaturedProducts from "../controllers/common/getEveryFeatured";
import getAllProducts from "../controllers/common/getAllProductCategory";

const footwearRouter = express.Router()

footwearRouter.route("/getFeatured").get(getFeaturedProducts);
footwearRouter.route("/getAll").get(getAllProducts);

export default footwearRouter