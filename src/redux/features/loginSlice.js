import { createSlice } from "@reduxjs/toolkit";


const loginSlice = createSlice({
    name:'login',
    initialState:{
        currentUser: JSON.parse(localStorage.getItem("user")) || null
    },
    reducers:{
        login: (state,action) => { 
            state.currentUser = action.payload;
            localStorage.setItem("user",JSON.stringify(state.currentUser))
        },
        logOut: (state,action) => {
            state.currentUser = null
            localStorage.setItem("user",JSON.stringify(null))
        }
    },
})

export const loginActions = loginSlice.actions;
export default loginSlice;