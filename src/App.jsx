// App.jsx - Tuần 3
// ✅ Cung cấp BOOKS_DATA và handleAddToCart xuống BookGrid qua props

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Banner from './components/Banner';
import CategoryList from './components/CategoryList';
import BookGrid from './components/BookGrid';
import Footer from './components/Footer';

// ✅ Dữ liệu sách đặt ở App — "single source of truth"
const BOOKS_DATA = [
  {
    id: 1,
    title: 'Đắc Nhân Tâm',
    author: 'Dale Carnegie',
    price: 129000,
    originalPrice: 159000,
    cover:
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    reviewCount: 1250,
    stock: 24,
    featured: true,
  },
  {
    id: 2,
    title: 'Nhà Giả Kim',
    author: 'Paulo Coelho',
    price: 99000,
    originalPrice: 129000,
    cover:
      'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80',
    rating: 4.7,
    reviewCount: 980,
    stock: 18,
    featured: true,
  },
  {
    id: 3,
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    price: 189000,
    originalPrice: 229000,
    cover:
      'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=600&q=80',
    rating: 4.9,
    reviewCount: 1520,
    stock: 0, // ← Hết hàng: test nút disabled
    featured: true,
  },
  {
    id: 4,
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    price: 139000,
    originalPrice: 169000,
    cover:
      'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    reviewCount: 1120,
    stock: 22,
    featured: true,
  },
];

function App() {
  // ✅ Handler thêm vào giỏ hàng — truyền xuống BookGrid → BookCard
  function handleAddToCart(book) {
    alert(`✅ Đã thêm "${book.title}" vào giỏ hàng!`);
  }

  return (
    <>
      {/* Header */}
      <Header />

      {/* Banner */}
      <Banner />

      {/* Danh mục */}
      <CategoryList />

      {/* Lưới sách — nhận books và onAddToCart qua props */}
      <BookGrid books={BOOKS_DATA} onAddToCart={handleAddToCart} />

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;