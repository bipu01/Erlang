"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const signUpSchema = new mongoose_1.default.Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    otherInfo: [],
    settings: [],
    likedProducts: [],
    itemsInCart: []
}, { timestamps: true });
const SignUp = mongoose_1.default.model("SignUp", signUpSchema);
exports.default = SignUp;
