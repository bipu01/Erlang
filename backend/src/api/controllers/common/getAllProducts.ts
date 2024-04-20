import config from "../../../config/config";
import { Request, Response } from "express";
import { MongoClient } from "mongodb";

const getAllProducts  = async(req:Request,res:Response) =>   {  
  const mongoClient= new MongoClient(config.mongoURI);
  try {
    const productList = await mongoClient.db(config.database).collection(req.body.category).find()
    res.send(productList)
} catch (error) {
    res.json({message:"Something went wrong", error:error})
}
};

export default getAllProducts