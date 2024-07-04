import { Request, Response } from "express";
import config from "../../../config/config";
import { MongoClient } from "mongodb";

const addToCart  = async(req:Request, res:Response) => {
    const mongoClient = new MongoClient(config.mongoURI)
    try {
        await mongoClient.connect()
        await mongoClient.db(config.database).collection("users").updateOne({_id:req.body.id},{cartItems: req.body.cartItems})
    } catch (error) {
        res.json({message:"something went wrong in addToCart ",error:error})
    }
};

export default addToCart
