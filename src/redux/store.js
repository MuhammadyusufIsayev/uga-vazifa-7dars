import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
import categoryReducer from './categorySlice';
import productReducer from './productSlice';

export const store = configureStore({
    reducer: {
        todo: todoReducer,
        category: categoryReducer,
        product: productReducer,
    },
});
