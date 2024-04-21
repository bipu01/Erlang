"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getAllJewellery_1 = __importDefault(require("../controllers/jewellery/getAllJewellery"));
const getFeaturedJewellery_1 = __importDefault(require("../controllers/jewellery/getFeaturedJewellery"));
const express_1 = __importDefault(require("express"));
const jewelleryRouter = express_1.default.Router();
jewelleryRouter.route("/getAll").get(getAllJewellery_1.default);
jewelleryRouter.route("/getFeatured").get(getFeaturedJewellery_1.default);
exports.default = jewelleryRouter;
