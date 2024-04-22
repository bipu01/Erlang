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
    price: {
        originalPrice: {
            type: Number,
        },
        currentPrice: {
            type: Number,
            required: true
        },
    },
    description: {
        type: String,
    },
    image: {
        image1: {
            type: String,
            required: true
        },
        image2: {
            type: String
        },
        image3: {
            type: String
        },
    },
    isFeatured: {
        type: Boolean
    },
    rating: {
        rate: {
            type: Number,
        },
        count: {
            type: Number
        }
    },
    category: {
        type: String,
        required: true
    }
});
// export default ProductSchema
const Product = mongoose_1.default.model("Product", productSchema);
exports.default = Product;
