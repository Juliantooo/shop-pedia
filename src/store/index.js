import { configureStore } from '@reduxjs/toolkit'
import cartItems from './slicers/cart'
import  orderItems from './slicers/orders'
import  products from './slicers/products'

export const store = configureStore({
    reducer: {
        products,
        cartItems,
        orderItems,
    },
})