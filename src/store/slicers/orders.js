import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orderItems: []
}

export const orderItems = createSlice({
    name: 'orderItems',
    initialState,
    reducers: {
        ADD_ORDER_ITEMS: (state, action) => {
            const localOrders = JSON.parse(localStorage.getItem('orderItems'))
            if (localOrders) {
                state.orderItems = localOrders;
            }
            state.orderItems.push(action.payload);
            localStorage.setItem('orderItems', JSON.stringify(state.orderItems))
        }
    }
})

export const {
    ADD_ORDER_ITEMS,
} = orderItems.actions

export default orderItems.reducer