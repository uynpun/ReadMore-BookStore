// App.jsx - Tuần 3
// Refactor App.jsx
// Truyền props cho CategoryList và BookGrid
// Cung cấp BOOKS_DATA và handleAddToCart xuống BookGrid

import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import Banner from "./components/Banner";
import CategoryList from "./components/CategoryList";
import BookGrid from "./components/BookGrid";
import Footer from "./components/Footer";
import SectionWrapper from "./components/SectionWrapper";

// Dữ liệu sách đặt ở App — "single source of truth"
const BOOKS_DATA = [
  {
    id: 1,
    title: "Đắc Nhân Tâm",
    author: "Dale Carnegie",
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

  function handleAddToCart(book) {
    alert(`✅ Đã thêm "${book.title}" vào giỏ hàng!`);
  }

  return (
    <>
      <Header />

      <Banner />

      <SectionWrapper
        title="Danh mục sách"
        subtitle="Khám phá các thể loại sách nổi bật"
        backgroundColor="#ffffff"
      >
        <CategoryList categories={CATEGORIES} />
      </SectionWrapper>

      <SectionWrapper
        title="Sách nổi bật"
        subtitle="Những cuốn sách được yêu thích"
        backgroundColor="#f8f9fa"
      >
        <BookGrid
          books={BOOKS_DATA}
          onAddToCart={handleAddToCart}
        />
      </SectionWrapper>

      <Footer />
    </>
  );
}


export default App;