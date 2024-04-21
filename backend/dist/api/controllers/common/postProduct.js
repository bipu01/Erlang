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
const mongodb_1 = require("mongodb");
const config_1 = __importDefault(require("../../../config/config"));
const postProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const mongoClient = new mongodb_1.MongoClient(config_1.default.mongoURI);
    try {
        const response = yield mongoClient.db("Erlang").collection(`${req.body.category}`).insertOne({
            title: req.body.title,
            price: req.body.price,
            desc: req.body.desc,
            image: req.body.image,
            rating: {
                rate: req.body.rate,
                count: req.body.count
            },
            isFeatured: req.body.isFeatured
        });
        res.json(response);
    }
    catch (error) {
        res.json({ message: error });
    }
});
exports.default = postProduct;
