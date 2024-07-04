// import User from "../../../db/userSchema";
// import config from "../../../config/config";
import User from "../../../db/userSchema";
import { Request, Response } from "express";
// import { MongoClient } from "mongodb";
import mongoose from "mongoose";

const createUser  =async (req:Request, res:Response) => {

    try {
        const found = await mongoose.connection.collection("users").find({email: req.body.email}).toArray()
        // res.send( found)

        if(found.length != 0){
            res.send("user already exists")
        }else{
            const user = new User({
                name: req.body.name,
                email: req.body.email,
                password:  req.body.password,
                otherInfo:[],
                settings:[],
                likedProducts:[],
                itemsInCart:[]
            })
            await user.save()
            res.send(user)
        }
    } catch (error) {
        res.json({message:"something went wrong fetching user", error:error})
    }
};
export default createUser
