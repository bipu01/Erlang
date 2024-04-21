"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const addToCart_1 = __importDefault(require("../controllers/user/addToCart"));
const getUserInfo_1 = __importDefault(require("../controllers/user/getUserInfo"));
const express_1 = __importDefault(require("express"));
const userRouter = express_1.default.Router();
userRouter.route("/info").get(getUserInfo_1.default);
userRouter.route("/addToCart").post(addToCart_1.default);
exports.default = userRouter;
