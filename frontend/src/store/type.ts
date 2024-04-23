export type product = {
  _id: string;
  name: string;
  price: { original: number; current: number };
  description: string;
  image: {
    image1: string;
    image2: string;
    image3: string;
  };
  rating: { rate: number; count: number };
  isFeatured: boolean;
  category: string;
};

export type rootStore = {
  cart: [],
  favourate: [],
  allFeaturedDress: [
    [
      {
        _id: string;
        name: string;
        price: { original: number; current: number };
        description: string;
        image: {
          image1: string;
          image2: string;
          image3: string;
        };
        rating: { rate: number; count: number };
        isFeatured: boolean;
        category: string;
      },
      {
        _id: string;
        name: string;
        price: { original: number; current: number };
        description: string;
        image: {
          image1: string;
          image2: string;
          image3: string;
        };
        rating: { rate: number; count: number };
        isFeatured: boolean;
        category: string;
      }
    ]
  ],
  allFeaturedJewellery: [
    [
      {
        _id: string;
        name: string;
        price: { original: number; current: number };
        description: string;
        image: {
          image1: string;
          image2: string;
          image3: string;
        };
        rating: { rate: number; count: number };
        isFeatured: boolean;
        category: string;
      },
      {
        _id: string;
        name: string;
        price: { original: number; current: number };
        description: string;
        image: {
          image1: string;
          image2: string;
          image3: string;
        };
        rating: { rate: number; count: number };
        isFeatured: boolean;
        category: string;
      }
    ]
  ],
  allFeaturedFootwear: [
    [
      {
        _id: string;
        name: string;
        price: { original: number; current: number };
        description: string;
        image: {
          image1: string;
          image2: string;
          image3: string;
        };
        rating: { rate: number; count: number };
        isFeatured: boolean;
        category: string;
      },
      {
        _id: string;
        name: string;
        price: { original: number; current: number };
        description: string;
        image: {
          image1: string;
          image2: string;
          image3: string;
        };
        rating: { rate: number; count: number };
        isFeatured: boolean;
        category: string;
      }
    ]
  ]
}
