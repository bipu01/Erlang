import { Request, Response } from "express";

const getAllJewellery = async(req:Request,res:Response) =>   {  
    res.json({message:"Hello from getAllJewellery"} ) 
};

export default getAllJewellery