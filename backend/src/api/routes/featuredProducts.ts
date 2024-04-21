import getEveryFeatured from "../controllers/common/getEveryFeatured"
import express from "express"

const featuredProductRouter = express.Router()
featuredProductRouter.route("/getEveryFeatured").get(getEveryFeatured)