import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: [],
}

export const cartItems = createSlice({
  name: 'cartItems',
  initialState,
  reducers: {
    SET_CART_ITEMS: (state, action) => {
      state.cartItems = action.payload;
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    ADD_CART_ITEMS: (state, action) => {
      state.cartItems.push(action.payload);
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    ADD_COUNT_ITEM: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload.id);
      item.count += action.payload.count
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    SUBTRACT_COUNT_ITEM: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item.count > 1) {
        item.count -= 1;
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
      } else {
        state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
      }
    },
    REMOVE_CART_ITEMS: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    }
  },
})

// Action creators are generated for each case reducer function
export const {
  SET_CART_ITEMS,
  ADD_CART_ITEMS,
  ADD_COUNT_ITEM,
  SUBTRACT_COUNT_ITEM,
  REMOVE_CART_ITEMS
} = cartItems.actions

export default cartItems.reducer