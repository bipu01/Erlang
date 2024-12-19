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
// import User from "../../../db/userSchema";
// import config from "../../../config/config";
const userSchema_1 = __importDefault(require("../../../db/userSchema"));
// import { MongoClient } from "mongodb";
const mongoose_1 = __importDefault(require("mongoose"));
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const found = yield mongoose_1.default.connection.collection("users").find({ email: req.body.email }).toArray();
        // res.send( found)
        if (found.length != 0) {
            res.send("user already exists");
        }
        else {
            const user = new userSchema_1.default({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                otherInfo: [],
                settings: [],
                likedProducts: [],
                itemsInCart: []
            });
            yield user.save();
            res.send(user);
        }
    }
    catch (error) {
        res.json({ message: "something went wrong fetching user", error: error });
    }
});
exports.default = createUser;
