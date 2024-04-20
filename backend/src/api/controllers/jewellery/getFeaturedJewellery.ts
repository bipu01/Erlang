import { Request, Response } from "express";

const getFeaturedJewellery = async(req:Request,res:Response) =>   {  
    res.json({message:"Hello from getFeaturedJewellery"} ) 
};

export default getFeaturedJewellery