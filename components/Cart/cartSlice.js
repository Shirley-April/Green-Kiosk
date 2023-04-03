import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.find(
        (item) => item._id === action.payload._id
      );

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.price *= existingItem.quantity;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    addQuantity: (state, action) => {
      const itemIndex = state.findIndex(
        (item) => item._id === action.payload._id
      );

      //   if (itemIndex !== -1) {
      //     state[itemIndex].quantity += 1;
      //     state[itemIndex].price +=
      //       state[itemIndex].price / (state[itemIndex].quantity - 1);
      //   }

      if (itemIndex !== -1) {
        const item = state[itemIndex];
        item.quantity += 1;
        item.price = (item.price / (item.quantity - 1)) * item.quantity;
      }
    },
    decreaseQuantity: (state, action) => {
      const itemIndex = state.findIndex(
        (item) => item._id === action.payload._id
      );

      if (itemIndex !== -1) {
        if (state[itemIndex].quantity > 1) {
          state[itemIndex].quantity -= 1;
          state[itemIndex].price -=
            state[itemIndex].price / (state[itemIndex].quantity + 1);
        } else {
          state.splice(itemIndex, 1);
        }
      }
    },
    deleteProduct: (state, action) => {
      const itemIndex = state.findIndex((item) => item._id === action.payload);

      if (itemIndex !== -1) {
        return state.filter((item) => item._id !== action.payload);
      }
    
      // return the original state if item is not found
      return state;
    },
  },
});

export const { addToCart, addQuantity, decreaseQuantity, deleteProduct } =
  cartSlice.actions;
export default cartSlice.reducer;
