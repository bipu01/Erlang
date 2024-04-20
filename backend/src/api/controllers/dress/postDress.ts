import { Request, Response } from "express";
import { MongoClient } from "mongodb";
import config from "../../../config/config";

const postDress  = async(req:Request,res:Response) => {
    const mongoClient = new MongoClient(config.mongoURI)
    try {
        const response= await mongoClient.db("Erlang").collection("dress").insertOne({
            title:req.body.title,
            price:req.body.price,
            desc:req.body.desc,
            image:req.body.image,
            rating:{
                rate:req.body.rate,
                count:req.body.count
            },
            category:req.body.category
        })
        res.json(response)
    } catch (error) {
        res.json({message:error})
    }
};

export default postDress