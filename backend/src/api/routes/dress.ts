import express from "express"
import getFeaturedDress from "../controllers/common/getEveryFeatured"
import getAllDresses  from "../controllers/common/getAllProductCategory";

const dressRouter = express.Router()

dressRouter.route("/getFeatured").get(getFeaturedDress);
dressRouter.route("/getAll").get(getAllDresses)

export default dressRouter
