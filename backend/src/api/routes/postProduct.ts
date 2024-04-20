import postProduct from "../controllers/common/postProduct"
import express from "express"

const postProductRouter = express.Router()
postProductRouter.route("/").post(postProduct)

export default postProductRouter