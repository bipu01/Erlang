"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getFeaturedDress_1 = __importDefault(require("../controllers/dress/getFeaturedDress"));
const getAllDress_1 = __importDefault(require("../controllers/dress/getAllDress"));
const dressRouter = express_1.default.Router();
dressRouter.route("/getFeatured").get(getFeaturedDress_1.default);
dressRouter.route("/getAll").get(getAllDress_1.default);
exports.default = dressRouter;
