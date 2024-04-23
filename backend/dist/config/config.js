"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const config = {
    mongoURI: (_a = process.env["MONGO_URI"]) !== null && _a !== void 0 ? _a : "",
    port: process.env["PORT"],
    database: (_b = process.env["DATABASE"]) !== null && _b !== void 0 ? _b : "",
    localMongoURI: (_c = process.env["LOCAL_MONGO_URI"]) !== null && _c !== void 0 ? _c : ""
};
exports.default = config;
