import express from "express"
import config from "./config/config";
import cors from "cors"
import dressRoute from "./api/routes/dress"
import postProductRouter from "./api/routes/postProduct"
import jewelleryRouter from "./api/routes/jewellery";
import footwearRouter from "./api/routes/footwear";
import userRouter from "./api/routes/user";

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
app.use("/api/dress",dressRoute)
app.use("/api/jewellery",jewelleryRouter)
app.use("/api/footwear",footwearRouter)



const start  = () => {
    try {
        app.listen(PORT,()=>{
            console.log(`server running in port ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
};

start()

