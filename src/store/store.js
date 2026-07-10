// store.js - Tuần 10
// Người làm: A
// ✅ configureStore — tạo Redux store với middleware mặc định
// ✅ Import cartSlice reducer

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
