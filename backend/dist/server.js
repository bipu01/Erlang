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
const express_1 = __importDefault(require("express"));
// import axios from "axios"
// import cookieParser from "cookie-parser"
// import mongoose from "mongoose";
const cors_1 = __importDefault(require("cors"));
const mongodb_1 = require("mongodb");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: `http://localhost:5173`,
    optionsSuccessStatus: 200
}));
// app.use(cookieParser())
const mongoURL = `mongodb+srv://biplovegautam123:eN1ozcZ1wvZRpCOH@test-db.jlb0gub.mongodb.net/?retryWrites=true&w=majority&appName=test-db`;
app.post("/postProduct", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const mongoClient = new mongodb_1.MongoClient(mongoURL);
    try {
        const response = yield mongoClient.db("Erlang").collection("dress").insertOne({
            title: req.body.title,
            price: req.body.price,
            desc: req.body.desc,
            image: req.body.image,
            rating: {
                rate: req.body.rate,
                count: req.body.count
            }
        });
        res.json(response);
    }
    catch (error) {
        res.json({ message: error });
    }
}));
app.listen(3000, () => {
    console.log("server running in port 3000");
});
