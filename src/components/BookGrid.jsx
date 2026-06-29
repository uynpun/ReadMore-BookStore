// BookGrid.jsx - Tuần 3
// Người làm: A (Trưởng nhóm)
// ✅ Nhận props { books, onAddToCart } — không hardcode dữ liệu trong component
// ✅ Map qua props books để render BookCard thật
// ✅ Xử lý empty state khi books rỗng hoặc undefined
// ✅ Dùng SectionWrapper

import BookCard from './BookCard';
import SectionWrapper from './SectionWrapper';

function BookGrid({ books = [], onAddToCart }) {
  const styles = {
    sectionHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '32px',
    },

    sectionTitle: {
      fontSize: '28px',
      fontWeight: '700',
      color: '#111827',
      margin: 0,
    },

    sectionTitleAccent: {
      color: '#0d6efd',
    },

    viewAllLink: {
      color: '#0d6efd',
      textDecoration: 'none',
      fontWeight: '600',
      fontSize: '14px',
    },

    // ✅ CSS Grid layout
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
      gap: '24px',
    },

    // ✅ Empty state
    emptyState: {
      textAlign: 'center',
      padding: '60px 20px',
      color: '#9ca3af',
    },

    emptyIcon: {
      fontSize: '48px',
      marginBottom: '12px',
    },

    emptyText: {
      fontSize: '16px',
      fontWeight: '600',
      color: '#6b7280',
      margin: 0,
    },

    emptySubtext: {
      fontSize: '14px',
      color: '#9ca3af',
      marginTop: '6px',
    },
  };

  return (
    // ✅ Dùng SectionWrapper thay vì viết lại section layout
    <SectionWrapper backgroundColor="#f9fafb">
      <div id="bestsellers">
        {/* Header với title + link "Xem tất cả" */}
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>
            Sách{' '}
            <span style={styles.sectionTitleAccent}>Bán Chạy</span>
          </h2>
          <a href="#" style={styles.viewAllLink}>
            Xem tất cả →
          </a>
        </div>

        {/* ✅ Empty state khi không có sách */}
        {books.length === 0 ? (
          <div style={styles.emptyState}>
            <div style={styles.emptyIcon}>📭</div>
            <p style={styles.emptyText}>Chưa có sách nào</p>
            <p style={styles.emptySubtext}>
              Vui lòng quay lại sau nhé!
            </p>
          </div>
        ) : (
          // ✅ Map qua props books — mỗi BookCard nhận book + onAddToCart
          <div style={styles.grid}>
            {books.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}


export default BookGrid;
