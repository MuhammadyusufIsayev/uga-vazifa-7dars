import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCategories = createAsyncThunk(
    'category/fetchCategories',
    async () => {
        const response = await axios.get('https://ecommerce-backend-fawn-eight.vercel.app/api/categories');
        return response.data;
    }
);

const categorySlice = createSlice({
    name: 'category',
    initialState: [],
    extraReducers: (builder) => {
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            return action.payload;
        });
    }
});

export default categorySlice.reducer;
