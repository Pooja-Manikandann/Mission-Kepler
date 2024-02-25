import { createSlice } from "@reduxjs/toolkit";

const loaderSlice = createSlice({
    name: 'loader',
    initialState: { isLoading: false, showOverLay: false},
    reducers: {
        toggleLoader(state, action) {
            state.isLoading = !state.isLoading;
            state.showOverLay = action.payload;
        }
    }
});

export const loaderAction = loaderSlice.actions;

export default loaderSlice.reducer;