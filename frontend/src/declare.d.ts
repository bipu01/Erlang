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
    custom?:string
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

