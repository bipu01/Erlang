"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getAllFootwear_1 = __importDefault(require("../controllers/footwear/getAllFootwear"));
const getFeaturedFootwear_1 = __importDefault(require("../controllers/footwear/getFeaturedFootwear"));
const express_1 = __importDefault(require("express"));
const footwearRouter = express_1.default.Router();
footwearRouter.route("/getFeatured").get(getFeaturedFootwear_1.default);
footwearRouter.route("/getAll").get(getAllFootwear_1.default);
exports.default = footwearRouter;
