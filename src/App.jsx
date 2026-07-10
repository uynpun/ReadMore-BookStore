// App.jsx - Tuần 8
// ✅ Xóa BOOKS_DATA hardcode — dữ liệu giờ nằm ở db.json (json-server)
// ✅ Thêm route /books → BookListPage (fetch thật từ API)
// ✅ HomePage vẫn giữ filteredBooks từ BOOKS_DATA tạm (Người B sẽ refactor)

import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { useCart } from "./context/CartContext";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

// Pages
import HomePage from "./pages/HomePage";
import BookListPage from "./pages/BookListPage";
import NotFoundPage from "./pages/NotFoundPage";

// Dữ liệu sách tĩnh cho HomePage (tạm giữ — sẽ chuyển sang fetch API sau)
const BOOKS_DATA = [
  {
    id: 1,
    title: "Đắc Nhân Tâm",
    author: "Dale Carnegie",
    category: "Tâm lý - Kỹ năng sống",
    price: 129000,
    originalPrice: 159000,
    cover:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
    rating: 4.8,
    reviewCount: 1250,
    stock: 24,
    featured: true,
  },
  {
    id: 2,
    title: "Nhà Giả Kim",
    author: "Paulo Coelho",
    category: "Văn học",
    price: 99000,
    originalPrice: 129000,
    cover:
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
    rating: 4.7,
    reviewCount: 980,
    stock: 18,
    featured: true,
  },
  {
    id: 3,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    category: "Lịch sử",
    price: 189000,
    originalPrice: 229000,
    cover:
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=600&q=80",
    rating: 4.9,
    reviewCount: 1520,
    stock: 0,
    featured: true,
  },
  {
    id: 4,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    category: "Kinh doanh",
    price: 139000,
    originalPrice: 169000,
    cover:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=600&q=80",
    rating: 4.8,
    reviewCount: 1120,
    stock: 22,
    featured: true,
  },
];

function App() {
  // ✅ Lấy cart state từ Context
  const { cart, cartCount, addToCart } = useCart();

  // ✅ Search state
  const [searchTerm, setSearchTerm] = useState("");

  // ✅ Category Filter State
  const [activeCategory, setActiveCategory] = useState(null);

  const CATEGORIES = [
    { id: 1, name: "Tâm lý - Kỹ năng sống", icon: "🧠" },
    { id: 2, name: "Văn học", icon: "📚" },
    { id: 3, name: "Lịch sử", icon: "🏛️" },
    { id: 4, name: "Kinh doanh", icon: "💼" },
    { id: 5, name: "Phát triển bản thân", icon: "🌱" },
  ];

  // ✅ handleAddToCart
  function handleAddToCart(book) {
    addToCart(book);
    alert(`✅ Đã thêm "${book.title}" vào giỏ hàng!`);
  }

  // Search handler
  function handleSearch(term) {
    setSearchTerm(term);
  }

  // ✅ Derived State — filteredBooks
  const filteredBooks = BOOKS_DATA.filter((book) => {
    const matchCategory =
      !activeCategory || book.category === activeCategory;
    const matchSearch =
      searchTerm === "" ||
      book.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <>
      <Header cartCount={cartCount} />

      <Routes>
        {/* ✅ Trang chủ */}
        <Route
          path="/"
          element={
            <HomePage
              filteredBooks={filteredBooks}
              onAddToCart={handleAddToCart}
              onSearch={handleSearch}
              categories={CATEGORIES}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
          }
        />

        {/* ✅ Tuần 8: Danh sách sách — fetch thật từ json-server */}
        <Route path="/books" element={<BookListPage />} />

        {/* ✅ Chi tiết sách */}
        <Route
          path="/book/:id"
          element={
            <div className="text-center py-5">
              <h2>📖 Trang chi tiết sách</h2>
              <p className="text-muted">Người B sẽ tạo BookDetailPage ở đây</p>
            </div>
          }
        />

        {/* ✅ Giỏ hàng */}
        <Route
          path="/cart"
          element={
            <ProtectedRoute
              isAllowed={cart.length > 0}
              redirectTo="/"
            >
              <div className="text-center py-5">
                <h2>🛒 Giỏ hàng ({cartCount} sản phẩm)</h2>
                <p className="text-muted">Người B sẽ tạo CartPage ở đây</p>
              </div>
            </ProtectedRoute>
          }
        />

        {/* ✅ 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;