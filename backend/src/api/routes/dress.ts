import express from "express"
import getFeaturedDress from "../controllers/dress/getFeaturedDress"
import getAllDresses  from "../controllers/dress/getAllDress";

const dressRouter = express.Router()

dressRouter.route("/getFeatured").get(getFeaturedDress);
dressRouter.route("/getAll").get(getAllDresses)

export default dressRouter
