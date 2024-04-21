import postContactUsMessage from "../controllers/message/messageData";
import express from "express";

const contactUsRouter = express.Router()
contactUsRouter.route("/contactUsMessage").post(postContactUsMessage)

export default contactUsRouter