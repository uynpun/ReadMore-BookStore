// BookGrid.jsx - Tuần 2: Functional Component với map()
// Người làm: A (Trưởng nhóm)
// Khai báo mảng BOOKS_DATA trong file này, map() để render BookCard

// Import BookCard — sẽ được B tạo
// (nếu B chưa tạo, tạm comment và dùng placeholder bên dưới)
// import BookCard from './BookCard';

// ✅ Mảng hardcode 4 cuốn sách (dùng dữ liệu từ db.json)
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
    stock: 12,
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

// Helper: format giá tiền VNĐ
function formatPrice(price) {
  return price.toLocaleString('vi-VN') + '₫';
}

// Placeholder BookCard dùng tạm khi B chưa tạo BookCard.jsx
// Tuần sau sẽ import BookCard từ './BookCard'
function BookCardPlaceholder({ book }) {
  const styles = {
    card: {
      border: '1px solid #e5e7eb',
      borderRadius: '12px',
      overflow: 'hidden',
      backgroundColor: '#fff',
      boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
      display: 'flex',
      flexDirection: 'column',
    },
    imgWrap: {
      position: 'relative',
      height: '220px',
      overflow: 'hidden',
      backgroundColor: '#f3f4f6',
    },
    img: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    featuredBadge: {
      position: 'absolute',
      top: '10px',
      left: '10px',
      backgroundColor: '#ff4757',
      color: '#fff',
      fontSize: '11px',
      fontWeight: '700',
      padding: '3px 8px',
      borderRadius: '4px',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
    },
    body: {
      padding: '14px',
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      flex: 1,
    },
    title: {
      fontWeight: '700',
      fontSize: '15px',
      color: '#111827',
      margin: 0,
      lineHeight: '1.4',
    },
    author: {
      fontSize: '13px',
      color: '#6b7280',
      margin: 0,
    },
    rating: {
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      fontSize: '13px',
      color: '#f59e0b',
    },
    priceRow: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      marginTop: '4px',
    },
    price: {
      fontWeight: '700',
      fontSize: '16px',
      color: '#0d6efd',
    },
    originalPrice: {
      fontSize: '13px',
      color: '#9ca3af',
      textDecoration: 'line-through',
    },
    btn: {
      marginTop: '10px',
      padding: '9px',
      backgroundColor: '#0d6efd',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      fontWeight: '600',
      fontSize: '14px',
      cursor: 'pointer',
      width: '100%',
    },
  };

  return (
    <div style={styles.card}>
      <div style={styles.imgWrap}>
        <img src={book.cover} alt={book.title} style={styles.img} />
        {book.featured && (
          <span style={styles.featuredBadge}>Bestseller</span>
        )}
      </div>
      <div style={styles.body}>
        <p style={styles.title}>{book.title}</p>
        <p style={styles.author}>{book.author}</p>
        <div style={styles.rating}>
          ⭐ {book.rating}
          <span style={{ color: '#9ca3af' }}>({book.reviewCount})</span>
        </div>
        <div style={styles.priceRow}>
          <span style={styles.price}>{formatPrice(book.price)}</span>
          <span style={styles.originalPrice}>
            {formatPrice(book.originalPrice)}
          </span>
        </div>
        <button style={styles.btn}>🛒 Thêm vào giỏ</button>
      </div>
    </div>
  );
}

// ========================================
// BookGrid Component — A làm
// ========================================
function BookGrid() {
  const styles = {
    section: {
      padding: '48px 24px',
      backgroundColor: '#f9fafb',
    },
    container: {
      maxWidth: '1100px',
      margin: '0 auto',
    },
    sectionHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
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
    // ✅ Grid — dùng CSS Grid để layout sách
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
      gap: '24px',
    },
  };

  return (
    <section id="bestsellers" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>
            Sách{' '}
            <span style={styles.sectionTitleAccent}>Bán Chạy</span>
          </h2>
          <a href="#" style={styles.viewAllLink}>
            Xem tất cả →
          </a>
        </div>

        {/* ✅ Dùng map() render danh sách sách — mỗi phần tử có key={book.id} */}
        <div style={styles.grid}>
          {BOOKS_DATA.map((book) => (
            // Tuần 3 sẽ thay BookCardPlaceholder bằng <BookCard book={book} />
            <BookCardPlaceholder key={book.id} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BookGrid;
