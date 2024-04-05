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
    product1:{
        ProductName?:string,
        rating?: number,
        price?:number,
        imgSrc?:string
    },
    product2:{
        ProductName?:string,
        rating?: number,
        price?:number,
        imgSrc?:string
    }
}
export interface productClusterPropInterface {
    product1:{
        ProductName?:string,
        rating?: number,
        price?:number,
        imgSrc?:string
    },
    product2:{
        ProductName?:string,
        rating?: number,
        price?:number,
        imgSrc?:string
    }
}

 export interface testimonialsPropInterface {
    avatar: string;
    comment: string;
    name: string;
}
