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
// import { MongoClient } from "mongodb";
const productSchema_1 = __importDefault(require("../../../db/productSchema"));
const getEveryFeatured = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5;
    // const mongoClient = new MongoClient(config.mongoURI);
    try {
        const featuredDressList = yield productSchema_1.default.find({ isFeatured: true });
        const featuredJewelleryList = yield productSchema_1.default.find({ isFeatured: true });
        const featuredFootwearList = yield productSchema_1.default.find({ isFeatured: true });
        let featuredDressCluster = [];
        let featuredJewelleryCluster = [];
        let featuredFootwearCluster = [];
        //Just initialing the object before using in the loops below
        let temp = {
            leftRow: {
                _id: "",
                name: "",
                price: { original: 0, current: 0 },
                description: "",
                image: {
                    image1: "",
                    image2: "",
                    image3: ""
                },
                rating: { rate: 0, count: 0 },
                isFeatured: false,
                category: ""
            },
            rightRow: {
                _id: "",
                name: "",
                price: { original: 0, current: 0 },
                description: "",
                image: {
                    image1: "",
                    image2: "",
                    image3: ""
                },
                rating: { rate: 0, count: 0 },
                isFeatured: false,
                category: ""
            }
        };
        //It makes cluster of featured Dress
        for (let i = 0; i < featuredDressList.length - 1; i++) {
            if (i % 2 == 0) {
                temp.leftRow._id = featuredDressList[i]._id.toString();
                temp.leftRow.name = featuredDressList[i].name || "";
                temp.leftRow.description = featuredDressList[i].description || "";
                temp.leftRow.image.image1 = ((_a = featuredDressList[i].image) === null || _a === void 0 ? void 0 : _a.image1) || "";
                temp.leftRow.image.image2 = ((_b = featuredDressList[i].image) === null || _b === void 0 ? void 0 : _b.image2) || "";
                temp.leftRow.image.image3 = ((_c = featuredDressList[i].image) === null || _c === void 0 ? void 0 : _c.image3) || "";
                temp.leftRow.isFeatured = featuredDressList[i].isFeatured || false;
                temp.leftRow.rating.count = ((_d = featuredDressList[i].rating) === null || _d === void 0 ? void 0 : _d.count) || 0;
                temp.leftRow.rating.rate = ((_e = featuredDressList[i].rating) === null || _e === void 0 ? void 0 : _e.rate) || 0;
                temp.leftRow.category = featuredDressList[i].category;
                featuredDressCluster.push(temp);
            }
            else {
                temp.rightRow._id = featuredDressList[i]._id.toString();
                temp.rightRow.name = featuredDressList[i].name || "";
                temp.rightRow.description = featuredDressList[i].description || "";
                temp.rightRow.image.image1 = ((_f = featuredDressList[i].image) === null || _f === void 0 ? void 0 : _f.image1) || "";
                temp.rightRow.image.image2 = ((_g = featuredDressList[i].image) === null || _g === void 0 ? void 0 : _g.image2) || "";
                temp.rightRow.image.image3 = ((_h = featuredDressList[i].image) === null || _h === void 0 ? void 0 : _h.image3) || "";
                temp.rightRow.isFeatured = featuredDressList[i].isFeatured || false;
                temp.rightRow.rating.count = ((_j = featuredDressList[i].rating) === null || _j === void 0 ? void 0 : _j.count) || 0;
                temp.rightRow.rating.rate = ((_k = featuredDressList[i].rating) === null || _k === void 0 ? void 0 : _k.rate) || 0;
                temp.rightRow.category = featuredDressList[i].category;
                featuredDressCluster.push(temp);
            }
        }
        //It makes cluster of featuredJewellery
        for (let i = 0; i < featuredJewelleryList.length - 1; i++) {
            if (i % 2 == 0) {
                temp.leftRow._id = featuredJewelleryList[i]._id.toString();
                temp.leftRow.name = featuredJewelleryList[i].name || "";
                temp.leftRow.description = featuredJewelleryList[i].description || "";
                temp.leftRow.image.image1 = ((_l = featuredJewelleryList[i].image) === null || _l === void 0 ? void 0 : _l.image1) || "";
                temp.leftRow.image.image2 = ((_m = featuredJewelleryList[i].image) === null || _m === void 0 ? void 0 : _m.image2) || "";
                temp.leftRow.image.image3 = ((_o = featuredJewelleryList[i].image) === null || _o === void 0 ? void 0 : _o.image3) || "";
                temp.leftRow.isFeatured = featuredJewelleryList[i].isFeatured || false;
                temp.leftRow.rating.count = ((_p = featuredJewelleryList[i].rating) === null || _p === void 0 ? void 0 : _p.count) || 0;
                temp.leftRow.rating.rate = ((_q = featuredJewelleryList[i].rating) === null || _q === void 0 ? void 0 : _q.rate) || 0;
                temp.leftRow.category = featuredJewelleryList[i].category;
                featuredJewelleryCluster.push(temp);
            }
            else {
                temp.rightRow._id = featuredJewelleryList[i]._id.toString();
                temp.rightRow.name = featuredJewelleryList[i].name || "";
                temp.rightRow.description = featuredJewelleryList[i].description || "";
                temp.rightRow.image.image1 = ((_r = featuredJewelleryList[i].image) === null || _r === void 0 ? void 0 : _r.image1) || "";
                temp.rightRow.image.image2 = ((_s = featuredJewelleryList[i].image) === null || _s === void 0 ? void 0 : _s.image2) || "";
                temp.rightRow.image.image3 = ((_t = featuredJewelleryList[i].image) === null || _t === void 0 ? void 0 : _t.image3) || "";
                temp.rightRow.isFeatured = featuredJewelleryList[i].isFeatured || false;
                temp.rightRow.rating.count = ((_u = featuredJewelleryList[i].rating) === null || _u === void 0 ? void 0 : _u.count) || 0;
                temp.rightRow.rating.rate = ((_v = featuredJewelleryList[i].rating) === null || _v === void 0 ? void 0 : _v.rate) || 0;
                temp.rightRow.category = featuredJewelleryList[i].category;
                featuredJewelleryCluster.push(temp);
            }
        }
        //It makes cluster of featuredFootwear
        for (let i = 0; i < featuredFootwearList.length - 1; i++) {
            if (i % 2 == 0) {
                temp.leftRow._id = featuredFootwearList[i]._id.toString();
                temp.leftRow.name = featuredFootwearList[i].name || "";
                temp.leftRow.description = featuredFootwearList[i].description || "";
                temp.leftRow.image.image1 = ((_w = featuredFootwearList[i].image) === null || _w === void 0 ? void 0 : _w.image1) || "";
                temp.leftRow.image.image2 = ((_x = featuredFootwearList[i].image) === null || _x === void 0 ? void 0 : _x.image2) || "";
                temp.leftRow.image.image3 = ((_y = featuredFootwearList[i].image) === null || _y === void 0 ? void 0 : _y.image3) || "";
                temp.leftRow.isFeatured = featuredFootwearList[i].isFeatured || false;
                temp.leftRow.rating.count = ((_z = featuredFootwearList[i].rating) === null || _z === void 0 ? void 0 : _z.count) || 0;
                temp.leftRow.rating.rate = ((_0 = featuredFootwearList[i].rating) === null || _0 === void 0 ? void 0 : _0.rate) || 0;
                temp.leftRow.category = featuredFootwearList[i].category;
                featuredFootwearCluster.push(temp);
            }
            else {
                temp.rightRow._id = featuredFootwearList[i]._id.toString();
                temp.rightRow.name = featuredFootwearList[i].name || "";
                temp.rightRow.description = featuredFootwearList[i].description || "";
                temp.rightRow.image.image1 = ((_1 = featuredFootwearList[i].image) === null || _1 === void 0 ? void 0 : _1.image1) || "";
                temp.rightRow.image.image2 = ((_2 = featuredFootwearList[i].image) === null || _2 === void 0 ? void 0 : _2.image2) || "";
                temp.rightRow.image.image3 = ((_3 = featuredFootwearList[i].image) === null || _3 === void 0 ? void 0 : _3.image3) || "";
                temp.rightRow.isFeatured = featuredFootwearList[i].isFeatured || false;
                temp.rightRow.rating.count = ((_4 = featuredFootwearList[i].rating) === null || _4 === void 0 ? void 0 : _4.count) || 0;
                temp.rightRow.rating.rate = ((_5 = featuredFootwearList[i].rating) === null || _5 === void 0 ? void 0 : _5.rate) || 0;
                temp.rightRow.category = featuredFootwearList[i].category;
                featuredFootwearCluster.push(temp);
            }
        }
        const everyFeaturedProduct = {
            featuredDressCluster: featuredDressCluster,
            featuredJewelleryCluster: featuredJewelleryCluster,
            featuredFootwearCluster: featuredFootwearCluster
        };
        res.send(everyFeaturedProduct);
    }
    catch (error) {
        res.json({ message: "Something went wrong", error: error });
    }
});
exports.default = getEveryFeatured;
