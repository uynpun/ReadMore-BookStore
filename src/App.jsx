// App.jsx - Tuần 10
// ✅ Migrate sang Redux: useSelector thay useCart context
// ✅ React.lazy + Suspense — lazy loading các page (code splitting)
// ✅ CartPage thật (không còn placeholder)

import { lazy, Suspense, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { Toaster } from "react-hot-toast";

import { selectCart, selectCartCount, addToCart } from "./store/cartSlice";

import Header from "./components/Header";
import Footer from "./components/Footer";

// ✅ React.lazy — chỉ load page khi user truy cập route đó
// → Giảm bundle size ban đầu, tăng tốc First Load
const HomePage = lazy(() => import("./pages/HomePage"));
const BookListPage = lazy(() => import("./pages/BookListPage"));
const BookManagePage = lazy(() => import("./pages/BookManagePage"));
const BookDetailPage = lazy(() => import("./pages/BookDetailPage"));
const CartPage = lazy(() => import("./pages/CartPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

// ✅ Loading fallback cho Suspense
function PageLoader() {
  return (
    <div className="text-center py-5">
      <Spinner animation="border" variant="primary" />
      <p className="mt-3 text-muted">Đang tải trang...</p>
    </div>
  );
}

// Dữ liệu sách tĩnh cho HomePage (tạm giữ)
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
  // ✅ Redux: đọc cart từ store (không còn dùng useCart context)
  const cart = useSelector(selectCart);
  const cartCount = useSelector(selectCartCount);
  const dispatch = useDispatch();

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

  // ✅ handleAddToCart — dùng Redux dispatch
  function handleAddToCart(book) {
    dispatch(addToCart(book));
    alert(`✅ Đã thêm "${book.title}" vào giỏ hàng!`);
  }

  function handleSearch(term) {
    setSearchTerm(term);
  }

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
      <Toaster position="top-center" />
      {/* ✅ Header tự đọc cartCount từ Redux — không cần truyền props */}
      <Header />

      {/* ✅ Suspense bọc Routes — hiện loading khi lazy page đang tải */}
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* Trang chủ */}
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

          {/* Danh sách sách — fetch từ json-server */}
          <Route path="/books" element={<BookListPage />} />

          {/* Quản lý sách — Admin CRUD */}
          <Route path="/admin" element={<BookManagePage />} />

          {/* Chi tiết sách */}
          <Route path="/book/:id" element={<BookDetailPage />} />

          {/* ✅ Giỏ hàng — CartPage thật với Redux */}
          <Route path="/cart" element={<CartPage />} />

          {/* 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
}

export default App;