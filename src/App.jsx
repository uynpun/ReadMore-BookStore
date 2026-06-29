// App.jsx - Tuần 3
// Người B: Refactor App.jsx
// Truyền Props cho CategoryList và BookGrid

import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import Banner from "./components/Banner";
import CategoryList from "./components/CategoryList";
import BookGrid from "./components/BookGrid";
import Footer from "./components/Footer";
import SectionWrapper from "./components/SectionWrapper";

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

  const BOOKS = [
    {
      id: 1,
      title: "Đắc Nhân Tâm",
      author: "Dale Carnegie",
      price: "120.000đ",
      image: "https://picsum.photos/200/300?1",
      stock: 10,
    },
    {
      id: 2,
      title: "Atomic Habits",
      author: "James Clear",
      price: "180.000đ",
      image: "https://picsum.photos/200/300?2",
      stock: 8,
    },
    {
      id: 3,
      title: "Clean Code",
      author: "Robert C. Martin",
      price: "250.000đ",
      image: "https://picsum.photos/200/300?3",
      stock: 0,
    },
    {
      id: 4,
      title: "Nhà Giả Kim",
      author: "Paulo Coelho",
      price: "150.000đ",
      image: "https://picsum.photos/200/300?4",
      stock: 12,
    },
  ];

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
        <BookGrid books={BOOKS} />
      </SectionWrapper>

      <Footer />
    </>
  );
}


export default App;