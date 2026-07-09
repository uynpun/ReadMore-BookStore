// CartContext.jsx - Tuần 7
// Người làm: A
// ✅ createContext — tạo CartContext để chia sẻ state giỏ hàng cho toàn app
// ✅ useCart — custom hook giúp component con truy cập cart dễ dàng
// ✅ useEffect — cập nhật document.title khi cartCount thay đổi

import { createContext, useContext, useState, useEffect } from "react";

// ✅ Bước 1: Tạo Context
const CartContext = createContext();

// ✅ Bước 2: Custom Hook — useCart
// → Giúp các component con gọi useCart() thay vì useContext(CartContext)
// → Throw error nếu dùng ngoài Provider
function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart phải được dùng bên trong <CartProvider>");
  }

  return context;
}

// ✅ Bước 3: CartProvider — quản lý toàn bộ logic giỏ hàng
function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // ✅ Derived State — tổng số lượng sản phẩm
  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // ✅ Derived State — tổng tiền
  const cartTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // ✅ useEffect — cập nhật document.title khi cartCount thay đổi
  // → Side effect: tương tác với DOM bên ngoài React
  // → Cleanup: khôi phục title gốc khi component unmount
  useEffect(() => {
    const originalTitle = "ReadMore - Nhà Sách Online";

    if (cartCount > 0) {
      document.title = `(${cartCount}) ${originalTitle}`;
    } else {
      document.title = originalTitle;
    }

    // ✅ Cleanup function — chạy khi component unmount
    return () => {
      document.title = originalTitle;
    };
  }, [cartCount]); // ✅ Dependency array: chỉ chạy lại khi cartCount thay đổi

  // ✅ Thêm sách vào giỏ hàng
  function addToCart(book) {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === book.id);

      if (existingItem) {
        // Sách đã có → tăng quantity
        return prevCart.map((item) =>
          item.id === book.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Sách mới → thêm vào cuối mảng
        return [...prevCart, { ...book, quantity: 1 }];
      }
    });
  }

  // ✅ Tăng số lượng
  function increaseQuantity(bookId) {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === bookId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  // ✅ Giảm số lượng (tối thiểu 1)
  function decreaseQuantity(bookId) {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === bookId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  }

  // ✅ Xóa sản phẩm khỏi giỏ
  function removeItem(bookId) {
    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== bookId)
    );
  }

  // ✅ Xóa toàn bộ giỏ hàng
  function clearCart() {
    setCart([]);
  }

  // ✅ Value truyền xuống — tất cả state + actions
  const value = {
    cart,
    cartCount,
    cartTotal,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    clearCart,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider, useCart };
export default CartContext;
