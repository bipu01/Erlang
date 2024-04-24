export type ProductCardProp ={
    _id?:string,
    holeColor?:string,
    name?:string,
    desc?:string,
    priceCurrent?:number,
    priceOriginal?:number,
    ratingRate?:number,
    ratingCount?:number,
    img1?:string,
    img2?:string,
    img3?:string,
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
    color?:string,
    leftRow:{
        _id?:string,
        name?:string,
        desc?:string,
        ratingRate?:number,
        ratingCount?:number,
        priceOriginal?:number,
        priceCurrent?:number,
        img1?:string,
        img2?:string,
        img3?:string
    },
    rightRow:{
        _id?:string,
        name?:string,
        desc?:string,
        ratingRate?:number,
        ratingCount?:number,
        priceOriginal?:number,
        priceCurrent?:number,
        img1?:string,
        img2?:string,
        img3?:string
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
        id?:string,
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

export type productCluster ={
    leftRow:{
        _id:string,
        name:string,
        price: {original:number, current:number},
        description: string,
        image: {
            image1:string,
            image2:string,
            image3:string
        },
        rating: { rate: number, count: number },
        isFeatured: boolean,
        category:string
    },
    rightRow:{
        _id:string,
        name:string,
        price: {original:number, current:number},
        description: string,
        image: {
            image1:string,
            image2:string,
            image3:string
        },
        rating: { rate: number, count: number },
        isFeatured: boolean,
        category:string
    }
}

export type individualProduct ={
    _id:string,
        name:string,
        priceOriginal:number,
        priceCurrent:number,
        description: string,
        img1:string,
        img2:string,
        img3:string,
        ratingRate:number,
        ratingCount:number,
        isFeatured: boolean,
        category:string
}
