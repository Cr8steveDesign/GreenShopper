// Create a slice that will eventually give us our reducers

import { createSlice } from "@reduxjs/toolkit";

// create initial state for the user state

const initialState = {
  currentCart: null,
};

// Create slice with createSlice function

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    loadCartSuccess: (state, action) => {
      state.currentCart = action.payload;
    },
    updateCartSuccess: (state, action) => {
      state.currentUser = action.payload;
    },
    clearCartSuccess: (state) => {
      state.currentUser = null;
    },
    deleteCartOnSignOut: (state) => {
      state.currentUser = null;
    },
  },
});

// export the automatic actions that have been created by the toolkit
export const {
  loadCartSuccess,
  updateUserSuccess,
  deleteUserSuccess,
  signOut,
} = cartSlice.actions;

// Export the reducers to be combined in the store
export default cartSlice.reducer;
