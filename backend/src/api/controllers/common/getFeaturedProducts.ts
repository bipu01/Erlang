import config from "../../../config/config";
import { Request, Response } from "express";
import { MongoClient } from "mongodb";

const getFeaturedProducts  = async(req:Request,res:Response) => {
    const mongoClient = new MongoClient(config.mongoURI);
    try {
        const featuredDressList = await mongoClient.db(config.database).collection(req.body.category).find({featured:true})
        res.send(featuredDressList)
    } catch (error) {
        res.json({message:"Something went wrong", error:error})
    }
};

export default getFeaturedProducts