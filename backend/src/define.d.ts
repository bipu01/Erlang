export type productCluster ={
    leftRow:{
        _id:String,
        name:String,
        price: {original:Number, current:Number},
        description: String,
        image: {
            image1:String,
            image2:String,
            image3:String
        },
        rating: { rate: Number, count: Number },
        isFeatured: Boolean,
        category:String
    },
    rightRow:{
        _id:String,
        name:String,
        price: {original:Number, current:Number},
        description: String,
        image: {
            image1:String,
            image2:String,
            image3:String
        },
        rating: { rate: Number, count: Number },
        isFeatured: Boolean,
        category:String
    }
}
export type productList ={
    _id:String,
    name:String,
    price: {original:Number, current:Number},
    description: String,
    image: {
        image1:String,
        image2:String,
        image3:String
    },
    rating: { rate: Number, count: Number },
    isFeatured: Boolean,
    category:String
}