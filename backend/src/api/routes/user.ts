import signUp from "../controllers/user/signUp"
import addToCart from "../controllers/user/addToCart"
import getUserInfo from "../controllers/user/getUserInfo"
import express from "express"
import loginUser from "../controllers/user/login"

const userRouter  =express.Router()

userRouter.route("/info").get(getUserInfo)
userRouter.route("/login").get(loginUser)
userRouter.route("/addToCart").post(addToCart)
userRouter.route("/signUp").post(signUp)


export default userRouter
