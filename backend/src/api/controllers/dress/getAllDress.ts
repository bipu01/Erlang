import { Request, Response } from "express";

const getAllDresses  = async(req:Request,res:Response) =>   {  
    res.json({message:"Hello from getAllDress"} ) 
};

export default getAllDresses