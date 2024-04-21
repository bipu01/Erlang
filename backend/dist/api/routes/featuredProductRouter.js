"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getEveryFeatured_1 = __importDefault(require("../controllers/common/getEveryFeatured"));
const express_1 = __importDefault(require("express"));
const featuredProductRouter = express_1.default.Router();
featuredProductRouter.route("/").get(getEveryFeatured_1.default);
exports.default = featuredProductRouter;
