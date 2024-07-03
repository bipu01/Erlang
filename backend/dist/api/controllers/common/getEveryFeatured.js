"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const productSchema_1 = __importDefault(require("../../../db/productSchema"));
const getEveryFeatured = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
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
        featuredDressCluster[i] = {
          _id: element._id.toString(),
          "name": element.name || "",
          "desc": element.desc || "",
          "priceCurrent": element.priceCurrent || 0,
          "priceOriginal": element.priceOriginal || 0,
          "img1": element.img1 || "",
          "img2": element.img2 || "",
          "img3": element.img3 || "",
          "isFeatured": element.isFeatured || false,
          "ratingCount": element.ratingCount || 0,
          "ratingRate": element.ratingRate || 0,
          "category": element.category,
        };
        i++;
      });
      let j = 0;
      featuredJewelleryList.forEach((element) => {
        featuredJewelleryCluster[j] = {
          _id: element._id.toString(),
          "name": element.name || "",
          "desc": element.desc || "",
          "priceCurrent": element.priceCurrent,
          "priceOriginal": element.priceOriginal,
          "img1": element.img1,
          "img2": element.img2 || "",
          "img3": element.img3 || "",
          "isFeatured": element.isFeatured || false,
          "ratingCount": element.ratingCount || 0,
          "ratingRate": element.ratingRate || 0,
          "category": element.category,
        };
        j++;
      });
      let k = 0;
      featuredFootwearList.forEach((element) => {
        featuredFootwearCluster[k] = {
          _id: element._id.toString(),
          "name": element.name || "",
          "desc": element.desc || "",
          "priceCurrent": element.priceCurrent || 0,
          "priceOriginal": element.priceOriginal || 0,
          "img1": element.img1 || "",
          "img2": element.img2 || "",
          "img3": element.img3 || "",
          "isFeatured": element.isFeatured || false,
          "ratingCount": element.ratingCount || 0,
          "ratingRate": element.ratingRate || 0,
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
    } catch (error) {
      res.json({ message: "Something went wrong", error: error });
    }
  });
exports.default = getEveryFeatured;
