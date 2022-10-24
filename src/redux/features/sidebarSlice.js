import { createSlice } from "@reduxjs/toolkit";


const sidebarSlice = createSlice({
    name:"sidebar",
    initialState:{
        isSidebarOpen:false,
    },
    reducers: {
        openSidebar:(state) => {
            state.isSidebarOpen = true
        },
        closeSidebar:(state) => {
            state.isSidebarOpen = false
        }
    }
})

export const sidebarActions = sidebarSlice.actions
export default sidebarSlice