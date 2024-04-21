import express from "express"
import getFeaturedDress from "../controllers/common/getFeaturedProducts"
import getAllDresses  from "../controllers/common/getAllProducts";

const dressRouter = express.Router()

dressRouter.route("/getFeatured").get(getFeaturedDress);
dressRouter.route("/getAll").get(getAllDresses)

export default dressRouter
