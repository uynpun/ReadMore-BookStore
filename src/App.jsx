// App.jsx - Tuần 2
// Người A: Header, Footer, BookGrid
// Người B: Banner, CategoryList

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Banner from './components/Banner';
import CategoryList from './components/CategoryList';
import BookGrid from './components/BookGrid';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Banner */}
      <Banner />

      {/* Danh mục */}
      <CategoryList />

      {/* Lưới sách */}
      <BookGrid />

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;