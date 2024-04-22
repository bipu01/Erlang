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
const postProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = new productSchema_1.default({
            name: req.body.name,
            price: {
                currentPrice: req.body.currentPrice,
                originalPrice: req.body.originalPrice
            },
            description: req.body.description,
            image: {
                image1: req.body.image1,
                image2: req.body.image2,
                image3: req.body.image3
            },
            isFeatured: req.body.isFeatured,
            rating: {
                rate: 0,
                count: 0
            },
            category: req.body.category
        });
        product.save();
        res.status(201).json({ product });
    }
    catch (error) {
        res.json({ message: error });
    }
});
exports.default = postProduct;
