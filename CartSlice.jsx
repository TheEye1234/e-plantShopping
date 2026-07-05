import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add an item to the cart
    addItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },

    // Remove an item completely from the cart
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
    },

    // Update the quantity of an existing item
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;

      const item = state.items.find((item) => item.id === id);

      if (item) {
        if (quantity <= 0) {
          state.items = state.items.filter(
            (item) => item.id !== id
          );
        } else {
          item.quantity = quantity;
        }
      }
    },
  },
});

export const {
  addItem,
  removeItem,
  updateQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
