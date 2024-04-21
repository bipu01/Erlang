import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        originalPrice:{
            type:Number,
        },
        currentPrice:{
            type:Number,
            required:true
        },
    },
    description:{
        type:String,
    },
    image:{
        image1:{
            type:String,
            required:true
        },
        image2:{
            type:String
        },
        image3:{
            type:String
        },
    },
    isFeatured:{
        type:Boolean
    },
    rating:{
            rate:{
                type:Number,
            },
            count:{
                type:Number
            }
    },
    category:{
        type:String,
        required:true
    }
})  

// export default ProductSchema
const Product = mongoose.model("Product",productSchema )
export default Product