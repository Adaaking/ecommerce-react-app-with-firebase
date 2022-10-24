import { createSlice } from "@reduxjs/toolkit";
import { Navigate } from "react-router-dom";
import { loadingActions } from "./LoadingSlice";

const cartSlice = createSlice({
    name:"carts",
    initialState:{
        carts: JSON.parse(localStorage.getItem("carts") || "[]"),
    },
    reducers:{
        addToCart:(state,action)=>{
            const newItem = action.payload;
            const existingItem = state.carts.find((item) => item.id === newItem.id);
            if(existingItem){
                existingItem.quantity = newItem.quantity;
                existingItem.totalPrice = newItem.price * newItem.quantity;
                localStorage.setItem("carts",JSON.stringify(state.carts))

            }else{
                state.carts.push({
                    id:newItem.id,
                    name:newItem.name,
                    quantity:newItem.quantity,
                    price:newItem.price,
                    totalPrice: newItem.price * newItem.quantity,
                    img:newItem.img,  
                })
                localStorage.setItem("carts",JSON.stringify(state.carts))
            }
        },
        removeItem:(state,action) => {
            const carts = state.carts.filter((item) => item.id !== action.payload.id);
            localStorage.setItem("carts",JSON.stringify(carts))
        }
    }
})
export const cartActions = cartSlice.actions;
export default cartSlice