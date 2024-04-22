import Product from "../../../db/productSchema";
import { Request, Response } from "express";

const getSearchProduct=async(req:Request,res:Response)=>{
    const searchTerm = req.query.q
    try {
        const result = await Product.find({
            $or: [
                { name: { $regex: searchTerm, $options: 'i' } },
                { description: { $regex: searchTerm, $options: 'i' } },
                { category: { $regex: searchTerm, $options: 'i' } }
              ]
        })
        if(result.length > 0){
            res.status(200).json(result)
        }else{
            res.status(404).send("NO such product")
        }
    } catch (error) {
        res.status(500).json({error:"Internal server error"})
    }
}

export default getSearchProduct
