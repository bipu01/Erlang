import express from "express"
// import axios from "axios"
// import cookieParser from "cookie-parser"
// import mongoose from "mongoose";
import cors from "cors"
import { MongoClient } from "mongodb";


const app = express();
app.use(express.json())
app.use(cors({
    origin:`http://localhost:5173`,
    optionsSuccessStatus: 200 
}))
// app.use(cookieParser())
app.get("/",(req,res)=>{
    res.send("Hello from Erlang backend")
})

const mongoURL = `mongodb+srv://biplovegautam123:eN1ozcZ1wvZRpCOH@test-db.jlb0gub.mongodb.net/`

app.post("/postProduct", async(req,res)=>{
    const mongoClient = new MongoClient(mongoURL)
    try {
        const response= await mongoClient.db("Erlang").collection("dress").insertOne({
            title:req.body?.title,
            price:req.body?.price,
            desc:req.body?.desc,
            image:req.body?.image,
            rating:{
                rate:req.body?.rate,
                count:req.body?.count
            }
        })
        res.json(response)
    } catch (error) {
        res.json({message:error})
    }})



app.listen(3000,()=>{
    console.log("server running in port 3000")
})
