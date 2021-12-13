import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import { uislice } from "./ui-slice";

const store = configureStore({
  reducer: { ui: uislice.reducer, cart: cartSlice.reducer },
});

export default store;
