import { configureStore } from "@reduxjs/toolkit";
import themeReducer from './themeSlice';
import modalReducer from './modalSlice';
import loaderReducer from './loaderSlice';

const store = configureStore({
    reducer: {theme: themeReducer, modal: modalReducer, loader: loaderReducer}
})

export default store;