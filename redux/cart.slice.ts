import { createSlice } from '@reduxjs/toolkit'
import { Comics } from '@src/comics/loadInitialComics'

export interface Cart {
  items: Comics[]
}

export default interface CartState {
  cart: Cart
}

const initialState: Cart = { items: [] }

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemExists = state.items.find(
        (item) => item.id === action.payload.id,
      )
      if (itemExists) {
        itemExists.quantity++
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload)
      if (item) item.quantity++
    },
    decrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload)
      if (item && item.quantity === 1) {
        const index = state.items.findIndex(
          (item) => item.id === action.payload,
        )
        state.items.splice(index, 1)
      } else {
        if (item) item.quantity--
      }
    },
    removeFromCart: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload)
      state.items.splice(index, 1)
    },
  },
})

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} = cartSlice.actions
export const cartReducer = cartSlice.reducer
