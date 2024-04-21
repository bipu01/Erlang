import mongoose from "mongoose";

const loginSchema = new mongoose.Schema(
    {
        email:{
            type:String
        },
        password:{
            type:String
        }
    },
    {timestamps:true})

const Login = mongoose.model("Login",loginSchema)
export default Login