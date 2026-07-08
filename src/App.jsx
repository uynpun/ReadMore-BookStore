// App.jsx - Tuần 6
// ✅ Cấu hình Routes với react-router-dom
// ✅ Layout: Header + Routes + Footer (Header/Footer luôn hiển thị)
// ✅ ProtectedRoute bảo vệ trang Cart (phải có item trong giỏ)
// ✅ Route "*" → NotFoundPage (404)
// ✅ Route "/book/:id" → placeholder cho người B (BookDetailPage)

import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

// Pages
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

// Dữ liệu sách đặt ở App — "single source of truth"
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
  // ✅ Cart state
  const [cart, setCart] = useState([]);

  // ✅ Search state
  const [searchTerm, setSearchTerm] = useState("");

  // ✅ Category Filter State (Người B)
  const [activeCategory, setActiveCategory] = useState(null);

  const CATEGORIES = [
    {
      id: 1,
      name: "Tâm lý - Kỹ năng sống",
      icon: "🧠",
    },
    {
      id: 2,
      name: "Văn học",
      icon: "📚",
    },
    {
      id: 3,
      name: "Lịch sử",
      icon: "🏛️",
    },
    {
      id: 4,
      name: "Kinh doanh",
      icon: "💼",
    },
    {
      id: 5,
      name: "Phát triển bản thân",
      icon: "🌱",
    },
  ];

  // ✅ handleAddToCart — immutable update
  function handleAddToCart(book) {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === book.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === book.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...book, quantity: 1 }];
      }
    });

    alert(`✅ Đã thêm "${book.title}" vào giỏ hàng!`);
  }

  // Search handler
  function handleSearch(term) {
    setSearchTerm(term);
  }

  // ✅ Derived State — filteredBooks (Người B)
  const filteredBooks = BOOKS_DATA.filter((book) => {
    const matchCategory =
      !activeCategory || book.category === activeCategory;

    const matchSearch =
      searchTerm === "" ||
      book.title.toLowerCase().includes(searchTerm.toLowerCase());

    return matchCategory && matchSearch;
  });

  // ✅ Derived State — cartCount
  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      {/* ✅ Header luôn hiển thị — nằm ngoài Routes */}
      <Header cartCount={cartCount} />

      {/* ✅ Routes — SPA routing, không reload trang */}
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

        {/* ✅ Chi tiết sách — dynamic route (Người B sẽ tạo BookDetailPage) */}
        <Route
          path="/book/:id"
          element={
            <div className="text-center py-5">
              <h2>📖 Trang chi tiết sách</h2>
              <p className="text-muted">Người B sẽ tạo BookDetailPage ở đây</p>
            </div>
          }
        />

        {/* ✅ Giỏ hàng — ProtectedRoute (phải có sản phẩm mới vào được) */}
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

        {/* ✅ 404 — catch-all route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {/* ✅ Footer luôn hiển thị — nằm ngoài Routes */}
      <Footer />
    </>
  );
}



export default App;