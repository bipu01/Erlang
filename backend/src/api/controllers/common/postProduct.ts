import { Request, Response } from "express";
import Product from "../../../db/productSchema";


const postProduct  = async(req:Request,res:Response) => {
    try {
        const product= new Product({
            name:req.body.name,
            priceCurrent:req.body.currentPrice,
            priceOriginal:req.body.originalPrice,
            description:req.body.description,
            img1:req.body.img1,
            img2:req.body.img2,
            img3:req.body.img3,
            isFeatured:req.body.isFeatured,
            ratingCount:req.body.ratingCount,
            ratingRate:req.body.ratingRate,
            category:req.body.category
        }) 
            product.save()
            res.status(201).json({product})
    } catch (error) {
        res.json({message:error})
    }
};

export default postProduct