"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productSchema_1 = __importDefault(require("../../../db/productSchema"));
const getSearchProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const searchTerm = req.query.q;
    try {
        const result = yield productSchema_1.default.find({
            $or: [
                { name: { $regex: searchTerm, $options: 'i' } },
                { desc: { $regex: searchTerm, $options: 'i' } },
                { category: { $regex: searchTerm, $options: 'i' } }
            ]
        });
        if (result.length > 0) {
            res.status(200).json(result);
        }
        else {
            res.status(404).send("NO such product");
        }
    }
    catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});
exports.default = getSearchProduct;
