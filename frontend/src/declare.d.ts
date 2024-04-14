export type ProductCardProp ={
    holeColor?:string,
    ProductName?:string,
    rating?: number,
    price?:number,
    originalPrice?:number,
    imgSrc?:string
}

export type buttonProp={
    text:string,
    active?:boolean
}

export type productClusterProp ={
    color:string,
    leftRow:{
        ProductName?:string,
        rating?: number,
        price?:number,
        originalPrice?:number,
        imgSrc?:string
    },
    rightRow:{
        ProductName?:string,
        rating?: number,
        price?:number,
        originalPrice?:number,
        imgSrc?:string
    }
}
export interface productClusterPropInterface {
    leftRow:{
        ProductName?:string,
        rating?: number,
        price?:number,
        originalPrice?:number,
        imgSrc?:string
    },
    rightRow:{
        ProductName?:string,
        rating?: number,
        price?:number,
        originalPrice?:number,
        imgSrc?:string
    }
}
export interface testimonialsPropInterface {
    avatar: string;
    comment: string;
    name: string;
}
export interface cartPropInterface {
    image?:string,
    quantity?:number,
    color?:string,
    name?:string,
    rating?:number,
    orgPrice?:number,
    disPrice?:number
}

