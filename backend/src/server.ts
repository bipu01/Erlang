import express from "express"
import config from "./config/config";
import cors from "cors"
import dressRoute from "./api/routes/dress"

const app = express();
app.use(express.json())
app.use(cors({
    origin:`http://localhost:5173`,
    optionsSuccessStatus: 200 
}))

app.get("/",(req,res)=>{
    res.json({message:"Hello from Erlang backend"})
})

app.use("/api/dress",dressRoute)


app.listen(config.port,()=>{
    console.log(`server running in port ${config.port}`)
})
