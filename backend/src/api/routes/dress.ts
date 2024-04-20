import express from "express"
import getFeaturedDress from "../controllers/dress/getFeaturedDress"
import getAllDresses  from "../controllers/dress/getAllDress";
import postDress from "../controllers/dress/postDress";

const dressRouter = express.Router()

dressRouter.route("/getFeaturedDresses").get(getFeaturedDress);
dressRouter.route("/getAllDresses").get(getAllDresses)
dressRouter.route("/postProduct").post(postDress)

export default dressRouter
