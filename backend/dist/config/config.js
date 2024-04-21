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
    port: (_b = process.env["PORT"]) !== null && _b !== void 0 ? _b : 3000,
    database: (_c = process.env["DATABASE"]) !== null && _c !== void 0 ? _c : ""
};
exports.default = config;
