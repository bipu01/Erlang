import config from "../../../config/config";
import { Request, Response } from "express";
import { MongoClient } from "mongodb";

const createUser  =async (req:Request, res:Response) => {
    try {
        const mongoClient = new MongoClient(config.mongoURI)
        const user= await mongoClient.db(config.database).collection(req.body.category).insertOne({
            name:req.body.name,
            password: req.body.pasword,
            isAdmin: req.body.isAdmin,
            likedProducts:[],
            itemsInCart:[]
        })
        res.send(user)
    } catch (error) {
        res.json({message:"something went wrong fetching user", error:error})
    }
};
export default createUser
