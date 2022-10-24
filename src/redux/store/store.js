import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cartSlice";
import LoadingSlice from "../features/LoadingSlice";
import loginSlice from "../features/loginSlice";
import sidebarSlice from "../features/sidebarSlice";


const store = configureStore({
    reducer:{
        loginReducer: loginSlice.reducer,
        loader:LoadingSlice.reducer,
        cartReducer:cartSlice.reducer,
        sidebar: sidebarSlice.reducer
    }
})

export default store;