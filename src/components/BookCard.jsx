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
    toast.success(`Đã thêm "${book.title}" vào giỏ hàng!`);
  }

  return (
    <Card className="h-100 shadow-sm border-0 overflow-hidden transition-transform duration-200 hover:-translate-y-1">

      <div className="relative">
        <Link to={`/books/${book.id}`} className="text-decoration-none">
          <Card.Img
            variant="top"
            src={book.cover}
            alt={book.title}
            style={{
              height: "260px",
              objectFit: "cover",
              opacity: outOfStock ? 0.5 : 1,
            }}
          />
        </Link>

        {/* Badge giảm giá */}
        {discount > 0 && (
          <Badge
            bg="danger"
            className="absolute top-2 left-2"
          >
            -{discount}%
          </Badge>
        )}

        {/* Badge hết hàng */}
        {outOfStock && (
          <Badge
            bg="secondary"
            className="absolute top-2 right-2"
          >
            Hết hàng
          </Badge>
        )}

        {/* ❤️ Wishlist — Tailwind */}
        <button
          onClick={toggleWishlist}
          className="absolute bottom-2 right-2 bg-white/90 hover:bg-white rounded-full w-9 h-9 flex items-center justify-center text-lg shadow-md transition-all duration-200 border-none cursor-pointer"
        >
          {isFavorite ? "❤️" : "🤍"}
        </button>
      </div>

      <Card.Body className="flex flex-col">
        <Card.Title>
          <Link
            to={`/books/${book.id}`}
            className="text-decoration-none text-dark hover:text-blue-600 transition-colors"
          >
            {book.title}
          </Link>
        </Card.Title>

        <Card.Text className="text-muted mb-1">
          {book.author}
        </Card.Text>

        {book.rating && (
          <Card.Text className="text-warning mb-2">
            ⭐ {book.rating}
            {book.reviewCount && (
              <span className="text-secondary">
                {" "}({book.reviewCount})
              </span>
            )}
          </Card.Text>
        )}

        <div className="mb-3">
          <span className="font-bold text-blue-600 text-xl">
            {formatPrice(book.price)}
          </span>

          {book.originalPrice > book.price && (
            <span className="line-through text-gray-400 ml-2 text-sm">
              {formatPrice(book.originalPrice)}
            </span>
          )}
        </div>

        {/* ✅ Nút thêm giỏ — Tailwind + Redux dispatch */}
        <button
          className={`mt-auto py-2.5 px-4 rounded-lg font-semibold text-white border-none cursor-pointer transition-all duration-200 ${
            outOfStock
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 active:scale-95"
          }`}
          disabled={outOfStock}
          onClick={handleAddToCart}
        >
          {outOfStock ? "🚫 Hết hàng" : "🛒 Thêm vào giỏ"}
        </button>
      </Card.Body>
    </Card>
  );
}

export default BookCard;