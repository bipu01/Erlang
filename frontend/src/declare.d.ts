export type ProductCardProp ={
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
