import { createSlice } from "@reduxjs/toolkit";

const LoadingSlice = createSlice({
    name:'loading',
    initialState:{
        IsLoading:false},
    reducers:{
        setLoadingTrue:(state) => { 
            state.IsLoading = true
        },
        setLoadingFalse: (state) => {
            state.IsLoading = false
        }
    }
})

export const loadingActions = LoadingSlice.actions;
export default LoadingSlice;