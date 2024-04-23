// import { productCluster } from "define";
import { Request, Response } from "express";
import Product from "../../../db/productSchema";

const getEveryFeatured = async (req: Request, res: Response) => {
  try {
    const featuredDressList = await Product.find({
      isFeatured: true,
      category: "dress",
    });
    const featuredJewelleryList = await Product.find({
      isFeatured: true,
      category: "jewellery",
    });
    const featuredFootwearList = await Product.find({
      isFeatured: true,
      category: "footwear",
    });

    let featuredDressCluster: Array<object> = [];
    let featuredJewelleryCluster: Array<object> = [];
    let featuredFootwearCluster: Array<object> = [];

    let i = 0;

    featuredDressList.forEach((element) => {
      featuredDressCluster[i] = {
        _id: element._id.toString(),
        "name": element.name || "",
        "description": element.description || "",
        "price": {
          "current": element.price?.currentPrice,
          "original": element.price?.originalPrice,
        },
        "image":{
            "image1": element.image?.image1 || "",
            "image2": element.image?.image2 || "",
            "image3": element.image?.image3 || "",
        },
        "isFeatured": element.isFeatured || false,
        "rating": {
          "count": element.rating?.count || 0,
          "rate": element.rating?.rate || 0,
        },
        "category": element.category,
      };
      i++;
    });

    let j = 0;
    featuredJewelleryList.forEach((element) => {
      featuredJewelleryCluster[j] = {
        _id: element._id.toString(),
        "name": element.name || "",
        "description": element.description || "",
        "price": {
          "current": element.price?.currentPrice,
          "original": element.price?.originalPrice,
        },
        "image":{
            "image1": element.image?.image1 || "",
            "image2": element.image?.image2 || "",
            "image3": element.image?.image3 || "",
        },
        "isFeatured": element.isFeatured || false,
        "rating": {
            "count": element.rating?.count || 0,
            "rate": element.rating?.rate || 0,
          },
        "category": element.category,
      };
      j++;
    });

    let k = 0;
    featuredFootwearList.forEach((element) => {
      featuredFootwearCluster[j] = {
        _id: element._id.toString(),
        "name": element.name || "",
        "description": element.description || "",
        "price": {
          "current": element.price?.currentPrice,
          "original": element.price?.originalPrice,
        },
        "image":{
            "image1": element.image?.image1 || "",
            "image2": element.image?.image2 || "",
            "image3": element.image?.image3 || "",
        },
        "isFeatured": element.isFeatured || false,
        "rating": {
            "count": element.rating?.count || 0,
            "rate": element.rating?.rate || 0,
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
  } catch (error) {
    res.json({ message: "Something went wrong", error: error });
  }
};

export default getEveryFeatured;
