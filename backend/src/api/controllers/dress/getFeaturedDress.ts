import { Request, Response } from "express";

const getFeaturedDress  = async(req:Request,res:Response) => {
    res.json({message:"Hello from getFeaturedDress"})
};

export default getFeaturedDress