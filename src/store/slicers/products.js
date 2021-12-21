import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: []
}

export const products = createSlice({
    name: 'products',
    initialState,
    reducers: {
        ADD_ALL_PRODUCTS: (state, action) => {
            state.products = action.payload
            localStorage.setItem('allProducts', JSON.stringify(action.payload))
        },
        UPDATE_ITEM_STOCK: (state, action) => {
            const allProducts = JSON.parse(localStorage.getItem('allProducts'))
            const item = allProducts.find((item) => item.id === action.payload.id);
            item.stock = action.payload.stock
            const index = state.products.findIndex((product) => product.id === item.id);
            allProducts[index] = item
            localStorage.setItem('allProducts', JSON.stringify(allProducts))
            state.products = allProducts;
        }
    }
})

export const {
    ADD_ALL_PRODUCTS,
    UPDATE_ITEM_STOCK
} = products.actions

export default products.reducer