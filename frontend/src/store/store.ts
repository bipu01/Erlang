import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import favourateSlice from "./favourateSlice";
import dressFeaturedSlice from "./dressFeaturedSlice";
import jewelleryFeaturedSlice from "./jewelleryFeaturedSlice";
import footwearFeaturedSlice from "./footwearFeaturedSlice";

const store = configureStore({
    reducer:{
        cart:cartSlice,
        favourate: favourateSlice,
        allFeaturedDress:dressFeaturedSlice,
        allFeaturedJewellery:jewelleryFeaturedSlice,
        allFeaturedFootwear:footwearFeaturedSlice
    }
})

export default store