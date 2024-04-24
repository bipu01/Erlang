"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const productSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true
    },
    priceOriginal: {
        type: Number,
    },
    priceCurrent: {
        type: Number,
        required: true
    },
    description: {
        type: String,
    },
    img1: {
        type: String,
        required: true
    },
    img2: {
        type: String,
    },
    img3: {
        type: String,
    },
    isFeatured: {
        type: Boolean
    },
    ratingRate: {
        type: Number,
    },
    ratingCount: {
        type: Number
    },
    category: {
        type: String,
        required: true
    }
});
// export default ProductSchema
const Product = mongoose_1.default.model("Product", productSchema);
exports.default = Product;
