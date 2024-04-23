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
const productSchema_1 = __importDefault(require("../../../db/productSchema"));
const getEveryFeatured = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const featuredDressList = yield productSchema_1.default.find({
            isFeatured: true,
            category: "dress",
        });
        const featuredJewelleryList = yield productSchema_1.default.find({
            isFeatured: true,
            category: "jewellery",
        });
        const featuredFootwearList = yield productSchema_1.default.find({
            isFeatured: true,
            category: "footwear",
        });
        let featuredDressCluster = [];
        let featuredJewelleryCluster = [];
        let featuredFootwearCluster = [];
        let i = 0;
        featuredDressList.forEach((element) => {
            var _a, _b, _c, _d, _e, _f, _g;
            featuredDressCluster[i] = {
                _id: element._id.toString(),
                "name": element.name || "",
                "description": element.description || "",
                "price": {
                    "current": (_a = element.price) === null || _a === void 0 ? void 0 : _a.currentPrice,
                    "original": (_b = element.price) === null || _b === void 0 ? void 0 : _b.originalPrice,
                },
                "image": {
                    "image1": ((_c = element.image) === null || _c === void 0 ? void 0 : _c.image1) || "",
                    "image2": ((_d = element.image) === null || _d === void 0 ? void 0 : _d.image2) || "",
                    "image3": ((_e = element.image) === null || _e === void 0 ? void 0 : _e.image3) || "",
                },
                "isFeatured": element.isFeatured || false,
                "rating": {
                    "count": ((_f = element.rating) === null || _f === void 0 ? void 0 : _f.count) || 0,
                    "rate": ((_g = element.rating) === null || _g === void 0 ? void 0 : _g.rate) || 0,
                },
                "category": element.category,
            };
            i++;
        });
        let j = 0;
        featuredJewelleryList.forEach((element) => {
            var _a, _b, _c, _d, _e, _f, _g;
            featuredJewelleryCluster[j] = {
                _id: element._id.toString(),
                "name": element.name || "",
                "description": element.description || "",
                "price": {
                    "current": (_a = element.price) === null || _a === void 0 ? void 0 : _a.currentPrice,
                    "original": (_b = element.price) === null || _b === void 0 ? void 0 : _b.originalPrice,
                },
                "image": {
                    "image1": ((_c = element.image) === null || _c === void 0 ? void 0 : _c.image1) || "",
                    "image2": ((_d = element.image) === null || _d === void 0 ? void 0 : _d.image2) || "",
                    "image3": ((_e = element.image) === null || _e === void 0 ? void 0 : _e.image3) || "",
                },
                "isFeatured": element.isFeatured || false,
                "rating": {
                    "count": ((_f = element.rating) === null || _f === void 0 ? void 0 : _f.count) || 0,
                    "rate": ((_g = element.rating) === null || _g === void 0 ? void 0 : _g.rate) || 0,
                },
                "category": element.category,
            };
            j++;
        });
        let k = 0;
        featuredFootwearList.forEach((element) => {
            var _a, _b, _c, _d, _e, _f, _g;
            featuredFootwearCluster[j] = {
                _id: element._id.toString(),
                "name": element.name || "",
                "description": element.description || "",
                "price": {
                    "current": (_a = element.price) === null || _a === void 0 ? void 0 : _a.currentPrice,
                    "original": (_b = element.price) === null || _b === void 0 ? void 0 : _b.originalPrice,
                },
                "image": {
                    "image1": ((_c = element.image) === null || _c === void 0 ? void 0 : _c.image1) || "",
                    "image2": ((_d = element.image) === null || _d === void 0 ? void 0 : _d.image2) || "",
                    "image3": ((_e = element.image) === null || _e === void 0 ? void 0 : _e.image3) || "",
                },
                "isFeatured": element.isFeatured || false,
                "rating": {
                    "count": ((_f = element.rating) === null || _f === void 0 ? void 0 : _f.count) || 0,
                    "rate": ((_g = element.rating) === null || _g === void 0 ? void 0 : _g.rate) || 0,
                },
                "category": element.category,
            };
            k++;
        });
        let everyFeaturedProduct = {
            featuredDressCluster: featuredDressCluster,
            featuredJewelleryCluster: featuredJewelleryCluster,
            featuredFootwearCluster: featuredFootwearCluster,
        };
        res.send(everyFeaturedProduct);
        console.log(everyFeaturedProduct);
    }
    catch (error) {
        res.json({ message: "Something went wrong", error: error });
    }
});
exports.default = getEveryFeatured;
