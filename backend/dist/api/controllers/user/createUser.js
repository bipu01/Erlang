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
const signUp_1 = __importDefault(require("db/models/signUp"));
const config_1 = __importDefault(require("../../../config/config"));
const mongodb_1 = require("mongodb");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const mongoClient = new mongodb_1.MongoClient(config_1.default.mongoURI);
        const isNew = yield mongoClient.db(config_1.default.database).collection("users").findOne({ email: req.body.email });
        if (isNew == null) {
            //     const user= await mongoClient.db(config.database).collection("users").insertOne({
            //         name:req.body.name,
            //         email:req.body.email,
            //         password: req.body.pasword,
            //         otherInfo:[],
            //         settings:[],
            //         likedProducts:[],
            //         itemsInCart:[]
            // })
            const user = new signUp_1.default({
                name: req.body.name,
                email: req.body.email,
                password: req.body.pasword,
                otherInfo: [],
                settings: [],
                likedProducts: [],
                itemsInCart: []
            });
            res.send(user);
        }
    }
    catch (error) {
        res.json({ message: "something went wrong fetching user", error: error });
    }
});
exports.default = createUser;
