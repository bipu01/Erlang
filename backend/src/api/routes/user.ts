import addToCart from "../controllers/user/addToCart"
import getUserInfo from "../controllers/user/getUserInfo"
import express from "express"

const userRouter  =express.Router()

userRouter.route("/info").get(getUserInfo)
userRouter.route("/addToCart").post(addToCart)


export default userRouter
