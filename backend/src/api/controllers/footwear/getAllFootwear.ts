import { Request, Response } from "express";

const getAllFootwear  = async(req:Request,res:Response) =>   {  
    res.json({message:"Hello from getAllFootwear"} ) 
};

export default getAllFootwear