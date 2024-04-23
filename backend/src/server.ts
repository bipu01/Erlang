import express from "express"
import config from "./config/config";
import cors from "cors"
import dressRoute from "./api/routes/dress"
import postProductRouter from "./api/routes/postProduct"
import jewelleryRouter from "./api/routes/jewellery";
import footwearRouter from "./api/routes/footwear";
import contactUsRouter from "./api/routes/contactUs";
import userRouter from "./api/routes/user";
import featuredProductRouter from "./api/routes/featuredProductRouter";
import mongoose from "mongoose";
import searchRouter from "./api/routes/searchRouter";

const app = express();
app.use(express.json())
app.use(cors({
    origin:`http://localhost:5173`,
    optionsSuccessStatus: 200 
}))

const PORT = config.port||3000

app.get("/",(req,res)=>{
    res.json({message:"Hello from Erlang backend"})
})

app.use("/api/postProduct",postProductRouter)
app.use("/api/user",userRouter)
app.use("/api/getEveryFeatured",featuredProductRouter)
app.use("/api/dress",dressRoute)
app.use("/api/jewellery",jewelleryRouter)
app.use("/api/footwear",footwearRouter)

app.use("/api/message",contactUsRouter)
app.use("/api/search",searchRouter)



export const start  = async() => {
    try {
        await mongoose.connect(config.mongoURI)
        app.listen(PORT,()=>{
            console.log(`server running in port ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
};

start()

