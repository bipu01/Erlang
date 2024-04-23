import { createSlice } from "@reduxjs/toolkit";
import { individualProduct } from "../declare";


const initialState:Array<individualProduct>=[]
const openedPoductSlice =createSlice({
    name:"openedPostSlice",
    initialState,
    reducers:{
        addOpenedProduct(state, action){
            state.push(action.payload)
        },
        removeOpenedProduct(state){
            state.pop()
        }
    }
})

export const {addOpenedProduct,removeOpenedProduct}= openedPoductSlice.actions
export default openedPoductSlice.reducer