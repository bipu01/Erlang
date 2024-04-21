"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getFeaturedProducts_1 = __importDefault(require("../controllers/common/getFeaturedProducts"));
const getAllProducts_1 = __importDefault(require("../controllers/common/getAllProducts"));
// import getAllJewellery from "../controllers/jewellery/getAllJewellery";
// import getFeaturedJewellery from "../controllers/jewellery/getFeaturedJewellery";
const jewelleryRouter = express_1.default.Router();
jewelleryRouter.route("/getAll").get(getAllProducts_1.default);
jewelleryRouter.route("/getFeatured").get(getFeaturedProducts_1.default);
exports.default = jewelleryRouter;
