"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const signUp_1 = __importDefault(require("../controllers/user/signUp"));
const addToCart_1 = __importDefault(require("../controllers/user/addToCart"));
const getUserInfo_1 = __importDefault(require("../controllers/user/getUserInfo"));
const express_1 = __importDefault(require("express"));
const login_1 = __importDefault(require("../controllers/user/login"));
const userRouter = express_1.default.Router();
userRouter.route("/info").get(getUserInfo_1.default);
userRouter.route("/login").get(login_1.default);
userRouter.route("/addToCart").post(addToCart_1.default);
userRouter.route("/signUp").post(signUp_1.default);
exports.default = userRouter;
