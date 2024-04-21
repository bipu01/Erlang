import { productCluster } from "define";
import { Request, Response } from "express";
// import { MongoClient } from "mongodb";
import Product from "../../../db/productSchema";

const getEveryFeatured  = async(req:Request,res:Response) => {
    // const mongoClient = new MongoClient(config.mongoURI);
    try {
        const featuredDressList= await Product.find({isFeatured:true})
        const featuredJewelleryList= await Product.find({isFeatured:true})
        const featuredFootwearList= await Product.find({isFeatured:true})

        let featuredDressCluster:Array<object> = []
        let featuredJewelleryCluster:Array<object> = []
        let featuredFootwearCluster:Array<object> = []

        //Just initialing the object before using in the loops below
        let temp:productCluster={
            leftRow:{
                _id:"",
                name:"",
                price: {original:0, current:0},
                description: "",
                image: {
                    image1:"",
                    image2:"",
                    image3:""
                },
                rating: { rate: 0, count: 0 },
                isFeatured: false,
                category:""
            },
            rightRow:{
                _id:"",
                name:"",
                price: {original:0, current:0},
                description: "",
                image: {
                    image1:"",
                    image2:"",
                    image3:""
                },
                rating: { rate: 0, count: 0 },
                isFeatured: false,
                category:""
            }
        }

        //It makes cluster of featured Dress
            for(let i=0; i<featuredDressList.length-1;  i++){
                if(i%2==0){
                    temp.leftRow._id=featuredDressList[i]._id.toString();
                    temp.leftRow.name=featuredDressList[i].name||"";
                    temp.leftRow.description=featuredDressList[i].description||"";
                    temp.leftRow.image.image1=featuredDressList[i].image?.image1||"";
                    temp.leftRow.image.image2=featuredDressList[i].image?.image2||"";
                    temp.leftRow.image.image3=featuredDressList[i].image?.image3||"";
                    temp.leftRow.isFeatured=featuredDressList[i].isFeatured||false;
                    temp.leftRow.rating.count=featuredDressList[i].rating?.count||0;
                    temp.leftRow.rating.rate=featuredDressList[i].rating?.rate||0;
                    temp.leftRow.category=featuredDressList[i].category;
                    
                    featuredDressCluster.push(temp);
                }else{
                    temp.rightRow._id=featuredDressList[i]._id.toString();
                    temp.rightRow.name=featuredDressList[i].name||"";
                    temp.rightRow.description=featuredDressList[i].description||"";
                    temp.rightRow.image.image1=featuredDressList[i].image?.image1||"";
                    temp.rightRow.image.image2=featuredDressList[i].image?.image2||"";
                    temp.rightRow.image.image3=featuredDressList[i].image?.image3||"";
                    temp.rightRow.isFeatured=featuredDressList[i].isFeatured||false;
                    temp.rightRow.rating.count=featuredDressList[i].rating?.count||0;
                    temp.rightRow.rating.rate=featuredDressList[i].rating?.rate||0;
                    temp.rightRow.category=featuredDressList[i].category;
                    
                    featuredDressCluster.push(temp);
                }
            }  

            //It makes cluster of featuredJewellery
            for(let i=0; i<featuredJewelleryList.length-1;  i++){
                if(i%2==0){
                    temp.leftRow._id=featuredJewelleryList[i]._id.toString();
                    temp.leftRow.name=featuredJewelleryList[i].name||"";
                    temp.leftRow.description=featuredJewelleryList[i].description||"";
                    temp.leftRow.image.image1=featuredJewelleryList[i].image?.image1||"";
                    temp.leftRow.image.image2=featuredJewelleryList[i].image?.image2||"";
                    temp.leftRow.image.image3=featuredJewelleryList[i].image?.image3||"";
                    temp.leftRow.isFeatured=featuredJewelleryList[i].isFeatured||false;
                    temp.leftRow.rating.count=featuredJewelleryList[i].rating?.count||0;
                    temp.leftRow.rating.rate=featuredJewelleryList[i].rating?.rate||0;
                    temp.leftRow.category=featuredJewelleryList[i].category;
                    
                    featuredJewelleryCluster.push(temp);
                }else{
                    temp.rightRow._id=featuredJewelleryList[i]._id.toString();
                    temp.rightRow.name=featuredJewelleryList[i].name||"";
                    temp.rightRow.description=featuredJewelleryList[i].description||"";
                    temp.rightRow.image.image1=featuredJewelleryList[i].image?.image1||"";
                    temp.rightRow.image.image2=featuredJewelleryList[i].image?.image2||"";
                    temp.rightRow.image.image3=featuredJewelleryList[i].image?.image3||"";
                    temp.rightRow.isFeatured=featuredJewelleryList[i].isFeatured||false;
                    temp.rightRow.rating.count=featuredJewelleryList[i].rating?.count||0;
                    temp.rightRow.rating.rate=featuredJewelleryList[i].rating?.rate||0;
                    temp.rightRow.category=featuredJewelleryList[i].category;
                    
                    featuredJewelleryCluster.push(temp);
                }
            }  

            //It makes cluster of featuredFootwear
            for(let i=0; i<featuredFootwearList.length-1;  i++){
                if(i%2==0){
                    temp.leftRow._id=featuredFootwearList[i]._id.toString();
                    temp.leftRow.name=featuredFootwearList[i].name||"";
                    temp.leftRow.description=featuredFootwearList[i].description||"";
                    temp.leftRow.image.image1=featuredFootwearList[i].image?.image1||"";
                    temp.leftRow.image.image2=featuredFootwearList[i].image?.image2||"";
                    temp.leftRow.image.image3=featuredFootwearList[i].image?.image3||"";
                    temp.leftRow.isFeatured=featuredFootwearList[i].isFeatured||false;
                    temp.leftRow.rating.count=featuredFootwearList[i].rating?.count||0;
                    temp.leftRow.rating.rate=featuredFootwearList[i].rating?.rate||0;
                    temp.leftRow.category=featuredFootwearList[i].category;
                    
                    featuredFootwearCluster.push(temp);
                }else{
                    temp.rightRow._id=featuredFootwearList[i]._id.toString();
                    temp.rightRow.name=featuredFootwearList[i].name||"";
                    temp.rightRow.description=featuredFootwearList[i].description||"";
                    temp.rightRow.image.image1=featuredFootwearList[i].image?.image1||"";
                    temp.rightRow.image.image2=featuredFootwearList[i].image?.image2||"";
                    temp.rightRow.image.image3=featuredFootwearList[i].image?.image3||"";
                    temp.rightRow.isFeatured=featuredFootwearList[i].isFeatured||false;
                    temp.rightRow.rating.count=featuredFootwearList[i].rating?.count||0;
                    temp.rightRow.rating.rate=featuredFootwearList[i].rating?.rate||0;
                    temp.rightRow.category=featuredFootwearList[i].category;
                    
                    featuredFootwearCluster.push(temp);
                }
            }  

        const everyFeaturedProduct={
            featuredDressCluster:featuredDressCluster,
            featuredJewelleryCluster:featuredJewelleryCluster,
            featuredFootwearCluster:featuredFootwearCluster
        }
        res.send(everyFeaturedProduct)
    } catch (error) {
        res.json({message:"Something went wrong", error:error})
    }
};

export default getEveryFeatured