import { Request, Response } from "express";
import Product from "../../../db/productSchema";


const postProduct  = async(req:Request,res:Response) => {
    try {
        const product= new Product({
            name:req.body.name,
            price:{
                currentPrice:req.body.currentPrice,
                originalPrice:req.body.originalPrice
            },
            description:req.body.description,
            image:{
                image1:req.body.image1,
                image2:req.body.image2,
                image3:req.body.image3
            },
            isFeatured:req.body.isFeatured,
            rating:{
                rate:0,
                count:0
            },
            category:req.body.category
        }) 
            product.save()
            res.status(201).json({product})
    } catch (error) {
        res.json({message:error})
    }
};

export default postProduct