import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"carts",
    initialState:{
        showCart:false,
        carts: []
    },
    reducers:{
        addToCart:(state,action)=>{
            const newItem = action.payload;
            const existingItem = state.carts.find((item) => item.id === newItem.id);
            if(existingItem){
                existingItem.quantity = newItem.quantity;
                existingItem.totalPrice = newItem.price * newItem.quantity;
            }else{
                state.carts.push({
                    id:newItem.id,
                    name:newItem.name,
                    quantity:newItem.quantity,
                    price:newItem.price,
                    totalPrice: newItem.price * newItem.quantity,
                    img:newItem.img,  
                })
            }
        },
        increaseItem: (state,action) =>{
            const newItem = action.payload;
            const existingItem = state.carts.find((item) => item.id === newItem.id);
            if(existingItem){
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
            }
        },
        decreaseItem: (state,action) =>{
            const id = action.payload;
            const existingItem = state.carts.find(item => item.id === id);
            if(existingItem.quantity === 1){
                state.carts = state.carts.filter(item => item.id !== id);
                existingItem.quantity--
            }else{
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;
            }
        },
        showCart:(state) => {
            state.showCart = !state.showCart
        },
        removeItem:(state,action) => {
            state.carts = state.carts.filter((item) => item.id !== action.payload.id);
        }
    }
})
export const cartActions = cartSlice.actions;
export default cartSlice