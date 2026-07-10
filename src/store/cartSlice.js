// cartSlice.js - Tuần 10
// Người làm: A
// ✅ Redux Toolkit — createSlice thay thế CartContext
// ✅ Immutable update tự động nhờ Immer (tích hợp trong RTK)
// ✅ Actions: addToCart, increaseQuantity, decreaseQuantity, removeItem, clearCart

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // Mảng các item: { ...book, quantity }
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  // ✅ Reducers — viết logic "mutate" trực tiếp, Immer lo immutable
  reducers: {
    // ✅ Thêm sách vào giỏ
    addToCart(state, action) {
      const book = action.payload;
      const existingItem = state.items.find((item) => item.id === book.id);

      if (existingItem) {
        // Sách đã có → tăng quantity (Immer cho phép mutate trực tiếp!)
        existingItem.quantity += 1;
      } else {
        // Sách mới → push vào mảng
        state.items.push({ ...book, quantity: 1 });
      }
    },

    // ✅ Tăng số lượng
    increaseQuantity(state, action) {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },

    // ✅ Giảm số lượng (tối thiểu 1)
    decreaseQuantity(state, action) {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },

    // ✅ Xóa sản phẩm khỏi giỏ
    removeItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    // ✅ Xóa toàn bộ giỏ hàng
    clearCart(state) {
      state.items = [];
    },
  },
});

// ✅ Export actions — dùng với dispatch()
export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  clearCart,
} = cartSlice.actions;

// ✅ Selectors — dùng với useSelector()
export const selectCart = (state) => state.cart.items;
export const selectCartCount = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);
export const selectCartTotal = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

// ✅ Export reducer — dùng trong store
export default cartSlice.reducer;
