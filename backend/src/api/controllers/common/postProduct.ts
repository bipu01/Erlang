import { Request, Response } from "express";
import { MongoClient } from "mongodb";
import config from "../../../config/config";

const postProduct  = async(req:Request,res:Response) => {
    const mongoClient = new MongoClient(config.mongoURI)
    try {
        const response= await mongoClient.db("Erlang").collection(`${req.body.category}`).insertOne({
            title:req.body.title,
            price:req.body.price,
            desc:req.body.desc,
            image:req.body.image,
            rating:{
                rate:req.body.rate,
                count:req.body.count
            },
            isFeatured: req.body.isFeatured
        })
        res.json(response)
    } catch (error) {
        res.json({message:error})
    }
};

export default postProduct