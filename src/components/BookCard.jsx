// BookCard.jsx - Tuần 3
// Người làm: B
// ✅ Nhận props { book, onAddToCart } — xóa hardcode
// ✅ Thêm discount badge
// ✅ Nút disabled khi hết hàng (book.stock === 0)

// Helper: format giá tiền VNĐ
function formatPrice(price) {
  return price.toLocaleString('vi-VN') + '₫';
}

// Helper: tính % giảm giá
function calcDiscount(price, originalPrice) {
  if (!originalPrice || originalPrice <= price) return 0;
  return Math.round(((originalPrice - price) / originalPrice) * 100);
}

function BookCard({ book, onAddToCart }) {
  const discount = calcDiscount(book.price, book.originalPrice);
  const outOfStock = book.stock === 0;

  const styles = {
    card: {
      border: '1px solid #e5e7eb',
      borderRadius: '12px',
      overflow: 'hidden',
      backgroundColor: '#fff',
      boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
      display: 'flex',
      flexDirection: 'column',
      transition: 'box-shadow 0.2s, transform 0.2s',
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
      opacity: outOfStock ? 0.5 : 1,
      transition: 'opacity 0.2s',
    },

    // ✅ Discount badge (chỉ hiện khi có giảm giá)
    discountBadge: {
      position: 'absolute',
      top: '10px',
      left: '10px',
      backgroundColor: '#ef4444',
      color: '#fff',
      fontSize: '11px',
      fontWeight: '700',
      padding: '3px 8px',
      borderRadius: '4px',
      letterSpacing: '0.3px',
    },

    // ✅ Badge hết hàng
    outOfStockBadge: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      backgroundColor: '#6b7280',
      color: '#fff',
      fontSize: '11px',
      fontWeight: '700',
      padding: '3px 8px',
      borderRadius: '4px',
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

    // ✅ Nút bình thường
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
      transition: 'background-color 0.2s',
    },

    // ✅ Nút disabled khi hết hàng
    btnDisabled: {
      marginTop: '10px',
      padding: '9px',
      backgroundColor: '#d1d5db',
      color: '#9ca3af',
      border: 'none',
      borderRadius: '8px',
      fontWeight: '600',
      fontSize: '14px',
      cursor: 'not-allowed',
      width: '100%',
    },
  };

  return (
    <div style={styles.card}>
      <div style={styles.imgWrap}>
        <img src={book.cover} alt={book.title} style={styles.img} />

        {/* ✅ Discount badge — chỉ hiện khi discount > 0 */}
        {discount > 0 && (
          <span style={styles.discountBadge}>-{discount}%</span>
        )}

        {/* ✅ Hết hàng badge */}
        {outOfStock && (
          <span style={styles.outOfStockBadge}>Hết hàng</span>
        )}
      </div>

      <div style={styles.body}>
        <p style={styles.title}>{book.title}</p>
        <p style={styles.author}>{book.author}</p>

        {/* Rating — chỉ hiện khi có */}
        {book.rating && (
          <div style={styles.rating}>
            ⭐ {book.rating}
            {book.reviewCount && (
              <span style={{ color: '#9ca3af' }}>({book.reviewCount})</span>
            )}
          </div>
        )}

        <div style={styles.priceRow}>
          <span style={styles.price}>{formatPrice(book.price)}</span>
          {book.originalPrice && book.originalPrice > book.price && (
            <span style={styles.originalPrice}>
              {formatPrice(book.originalPrice)}
            </span>
          )}
        </div>

        {/* ✅ Nút disabled khi hết hàng */}
        <button
          style={outOfStock ? styles.btnDisabled : styles.btn}
          disabled={outOfStock}
          onClick={() => !outOfStock && onAddToCart && onAddToCart(book)}
        >
          {outOfStock ? '🚫 Hết hàng' : '🛒 Thêm vào giỏ'}
        </button>
      </div>
    </div>
  );
}

export default BookCard;