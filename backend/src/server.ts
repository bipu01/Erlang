import express from "express"
import config from "./config/config";
import cors from "cors"
import dressRoute from "./api/routes/dress"
import postProductRouter from "./api/routes/postProduct"
import jewelleryRouter from "./api/routes/jewellery";
import footwearRouter from "./api/routes/footwear";
import contactUsRouter from "./api/routes/contactUs";

const app = express();
app.use(express.json())
app.use(cors({
    origin:`http://localhost:5173`,
    optionsSuccessStatus: 200 
}))

app.get("/",(req,res)=>{
    res.json({message:"Hello from Erlang backend"})
})
app.use("/api/postProduct",postProductRouter)

app.use("/api/dress",dressRoute)
app.use("/api/jewellery",jewelleryRouter)
app.use("/api/footwear",footwearRouter)

app.use("/api/message",contactUsRouter)


app.listen(config.port,()=>{
    console.log(`server running in port ${config.port}`)
})
