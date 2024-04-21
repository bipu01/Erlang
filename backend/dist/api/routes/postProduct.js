"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const postProduct_1 = __importDefault(require("../controllers/common/postProduct"));
const express_1 = __importDefault(require("express"));
const postProductRouter = express_1.default.Router();
postProductRouter.route("/").post(postProduct_1.default);
exports.default = postProductRouter;
