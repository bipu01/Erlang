export type ProductCardProp ={
    holeColor?:string,
    ProductName?:string,
    rating?: number,
    price?:number,
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
        imgSrc?:string
    },
    rightRow:{
        ProductName?:string,
        rating?: number,
        price?:number,
        imgSrc?:string
    }
}
export interface productClusterPropInterface {
    leftRow:{
        ProductName?:string,
        rating?: number,
        price?:number,
        imgSrc?:string
    },
    rightRow:{
        ProductName?:string,
        rating?: number,
        price?:number,
        imgSrc?:string
    }
}
