// BookCard.jsx - Tuần 10
// Người làm: A
// ✅ Migrate sang Redux Toolkit: useDispatch + addToCart action
// ✅ Migrate sang Tailwind CSS v4 (một phần — giữ react-bootstrap Card/Badge)
// ✅ Giữ nguyên wishlist từ tuần 9 (useLocalStorage)

import { Card, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import useLocalStorage from "../hooks/useLocalStorage";
import toast from "react-hot-toast";

// Format giá tiền
function formatPrice(price) {
  return price.toLocaleString("vi-VN") + "₫";
}

// Tính % giảm giá
function calcDiscount(price, originalPrice) {
  if (!originalPrice || originalPrice <= price) return 0;
  return Math.round(((originalPrice - price) / originalPrice) * 100);
}

function BookCard({ book }) {
  // ✅ Redux: useDispatch thay vì useCart() context
  const dispatch = useDispatch();

  // ===== Week 9: Wishlist (giữ nguyên) =====
  const [wishlist, setWishlist] = useLocalStorage("wishlist", []);
  const isFavorite = wishlist.includes(book.id);

  function toggleWishlist() {
    if (isFavorite) {
      setWishlist(wishlist.filter((id) => id !== book.id));
    } else {
      setWishlist([...wishlist, book.id]);
    }
  }

  const discount = calcDiscount(book.price, book.originalPrice);
  const outOfStock = book.stock === 0;

  // ✅ Handler dùng Redux dispatch
  function handleAddToCart() {
    dispatch(addToCart(book));
    toast.success(`Đã thêm "${book.title}" vào giỏ hàng!`, {
      icon: '🛍️',
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });
  }

  return (
    <Card className="h-100 shadow-sm border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group bg-white dark:bg-slate-800">
      <div className="relative overflow-hidden bg-slate-50 dark:bg-slate-900/50">
        <Link to={`/books/${book.id}`} className="text-decoration-none block">
          <Card.Img
            variant="top"
            src={book.cover}
            alt={book.title}
            className="transition-transform duration-500 group-hover:scale-110"
            style={{
              height: "280px",
              objectFit: "cover",
              opacity: outOfStock ? 0.5 : 1,
            }}
          />
        </Link>

        {/* Badge giảm giá */}
        {discount > 0 && (
          <Badge
            bg="danger"
            className="absolute top-3 left-3 px-2 py-1 shadow-sm font-semibold tracking-wide"
          >
            -{discount}%
          </Badge>
        )}

        {/* Badge hết hàng */}
        {outOfStock && (
          <Badge
            bg="secondary"
            className="absolute top-3 right-3 px-2 py-1 shadow-sm"
          >
            Hết hàng
          </Badge>
        )}

        {/* ❤️ Wishlist — Tailwind */}
        <button
          onClick={toggleWishlist}
          className={`absolute bottom-3 right-3 rounded-full w-10 h-10 flex items-center justify-center text-lg shadow-md transition-all duration-300 border-none cursor-pointer transform hover:scale-110 active:scale-90 ${
            isFavorite ? "bg-red-50 text-red-500" : "bg-white/90 text-gray-500 hover:text-red-500 dark:bg-slate-800/90 dark:text-gray-400 dark:hover:text-red-400"
          }`}
        >
          {isFavorite ? "❤️" : "🤍"}
        </button>
      </div>

      <Card.Body className="flex flex-col p-4">
        <Card.Title className="mb-2">
          <Link
            to={`/books/${book.id}`}
            className="text-decoration-none text-slate-800 dark:text-slate-100 font-bold hover:text-blue-600 dark:hover:text-blue-400 transition-colors line-clamp-2 leading-snug"
          >
            {book.title}
          </Link>
        </Card.Title>

        <Card.Text className="text-slate-500 dark:text-slate-400 text-sm mb-2 font-medium">
          {book.author}
        </Card.Text>

        {book.rating && (
          <Card.Text className="text-amber-500 mb-3 text-sm flex items-center gap-1 font-medium">
            <span>⭐ {book.rating}</span>
            {book.reviewCount && (
              <span className="text-slate-400 dark:text-slate-500 ml-1">
                ({book.reviewCount} đánh giá)
              </span>
            )}
          </Card.Text>
        )}

        <div className="mb-4 mt-auto">
          <span className="font-extrabold text-blue-600 dark:text-blue-400 text-xl">
            {formatPrice(book.price)}
          </span>

          {book.originalPrice > book.price && (
            <span className="line-through text-slate-400 dark:text-slate-500 ml-2 text-sm font-medium">
              {formatPrice(book.originalPrice)}
            </span>
          )}
        </div>

        {/* ✅ Nút thêm giỏ — Tailwind + Redux dispatch */}
        <button
          className={`w-full py-2.5 px-4 rounded-xl font-bold border-none cursor-pointer transition-all duration-300 flex items-center justify-center gap-2 ${
            outOfStock
              ? "bg-slate-200 text-slate-400 dark:bg-slate-700 dark:text-slate-500 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 active:scale-95 group-hover:bg-blue-700"
          }`}
          disabled={outOfStock}
          onClick={handleAddToCart}
        >
          {outOfStock ? (
            <>🚫 Hết hàng</>
          ) : (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              Thêm vào giỏ
            </>
          )}
        </button>
      </Card.Body>
    </Card>
  );
}

export default BookCard;