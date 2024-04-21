import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import favourateSlice from "./favourateSlice";

const store = configureStore({
    reducer:{
        cart:cartSlice,
        favourate: favourateSlice,
    }
})

export default store