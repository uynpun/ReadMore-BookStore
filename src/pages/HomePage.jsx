// HomePage.jsx - Tuần 6
// Người làm: A (Trưởng nhóm)
// ✅ Tách nội dung trang chủ từ App.jsx ra thành page riêng
// ✅ Nhận props từ App để hiển thị Banner, Search, Category, BookGrid

import Banner from '../components/Banner';
import CategoryList from '../components/CategoryList';
import BookGrid from '../components/BookGrid';
import SectionWrapper from '../components/SectionWrapper';
import SearchBar from '../components/SearchBar';

function HomePage({
  filteredBooks,
  onAddToCart,
  onSearch,
  categories,
  activeCategory,
  setActiveCategory,
}) {
  return (
    <>
      <Banner />

      <SectionWrapper
        title="Tìm kiếm"
        subtitle="Tìm cuốn sách bạn yêu thích"
        backgroundColor="#ffffff"
      >
        <SearchBar onSearch={onSearch} />
      </SectionWrapper>

      <SectionWrapper
        title="Danh mục sách"
        subtitle="Khám phá các thể loại sách nổi bật"
        backgroundColor="#ffffff"
      >
        <CategoryList
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      </SectionWrapper>

      <SectionWrapper
        title="Sách nổi bật"
        subtitle="Những cuốn sách được yêu thích"
        backgroundColor="#f8f9fa"
      >
        <BookGrid
          books={filteredBooks}
          onAddToCart={onAddToCart}
        />
      </SectionWrapper>
    </>
  );
}

export default HomePage;
