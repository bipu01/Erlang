import getSearchProduct from "../controllers/search/getSearchProduct";
import express from "express";

const searchRouter = express.Router()
searchRouter.route("/searchProduct").get(getSearchProduct)

export default searchRouter