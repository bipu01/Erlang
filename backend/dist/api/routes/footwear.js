"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getEveryFeatured_1 = __importDefault(require("../controllers/common/getEveryFeatured"));
const getAllProductCategory_1 = __importDefault(require("../controllers/common/getAllProductCategory"));
const footwearRouter = express_1.default.Router();
footwearRouter.route("/getFeatured").get(getEveryFeatured_1.default);
footwearRouter.route("/getAll").get(getAllProductCategory_1.default);
exports.default = footwearRouter;
