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
    primary?:boolean,
    darkMode?:boolean,
}

export interface buttonPropInterface{
    text:string,
    active?:boolean,
    primary?:boolean,
    darkBg:boolean,
    custom?:string,
    parentId?:string
}

export type productClusterProp ={
    color:string,
    leftRow:{
        id:string,
        ProductName?:string,
        rating?: number,
        price?:number,
        originalPrice?:number,
        imgSrc?:string
    },
    rightRow:{
        id:string,
        ProductName?:string,
        rating?: number,
        price?:number,
        originalPrice?:number,
        imgSrc?:string
    }
}
export interface productClusterPropInterface {
    leftRow:{
        id?:string,
        ProductName?:string,
        rating?: number,
        price?:number,
        originalPrice?:number,
        imgSrc?:string
    },
    rightRow:{
        id:string,
        ProductName?:string,
        rating?: number,
        price?:number,
        originalPrice?:number,
        imgSrc?:string
    }
}

export type svgProp ={
    borderColor?:string,
    fillColor?:string,
    borderThickness?:number,
    custom?:string
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

export interface productProp {
    id:number,
    title:string,
    price:number,
    description:string,
    image:string,
    rating:{
        rate:number,
        count:number
    }
}
