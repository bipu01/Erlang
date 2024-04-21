"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getFeaturedProducts_1 = __importDefault(require("../controllers/common/getFeaturedProducts"));
const getAllProducts_1 = __importDefault(require("../controllers/common/getAllProducts"));
const footwearRouter = express_1.default.Router();
footwearRouter.route("/getFeatured").get(getFeaturedProducts_1.default);
footwearRouter.route("/getAll").get(getAllProducts_1.default);
exports.default = footwearRouter;
