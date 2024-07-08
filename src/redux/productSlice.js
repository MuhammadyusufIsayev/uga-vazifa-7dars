import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk(
    'product/fetchProducts',
    async () => {
        const response = await axios.get('https://ecommerce-backend-fawn-eight.vercel.app/api/products');
        return response.data;
    }
);

const productSlice = createSlice({
    name: 'product',
    initialState: [],
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            return action.payload;
        });
    }
});

export default productSlice.reducer;
