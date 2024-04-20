import { Request, Response } from "express";

const getFeaturedFootwear  = async(req:Request,res:Response) =>   {  
    res.json({message:"Hello from getFeaturedFootwear"} ) 
};

export default getFeaturedFootwear