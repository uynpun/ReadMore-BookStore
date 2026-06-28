// App.jsx - Tuần 2 (A đã làm xong, chờ B tích hợp)
// Tuần 2 người A làm: Header, Footer, BookGrid
// Người B sẽ thêm: Banner, BookCard, CategoryList và hoàn thiện file này

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import BookGrid from './components/BookGrid';
import Footer from './components/Footer';

// TODO (B): import Banner from './components/Banner';
// TODO (B): import BookCard from './components/BookCard';
// TODO (B): import CategoryList from './components/CategoryList';

function App() {
  return (
    <>
      {/* A: Header — sticky navbar */}
      <Header />

      {/* TODO (B): <Banner /> */}
      {/* TODO (B): <CategoryList /> */}

      {/* A: BookGrid — lưới sách bán chạy */}
      <BookGrid />

      {/* A: Footer */}
      <Footer />
    </>
  );
}

export default App;
