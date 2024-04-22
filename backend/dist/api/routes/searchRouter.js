"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getSearchProduct_1 = __importDefault(require("../controllers/search/getSearchProduct"));
const express_1 = __importDefault(require("express"));
const searchRouter = express_1.default.Router();
searchRouter.route("/searchProduct").get(getSearchProduct_1.default);
exports.default = searchRouter;
