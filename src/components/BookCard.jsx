import { Card, Badge, Button } from "react-bootstrap";

// Helper: format giá tiền VNĐ
function formatPrice(price) {
  return price.toLocaleString("vi-VN") + "₫";
}

// Helper: tính % giảm giá
function calcDiscount(price, originalPrice) {
  if (!originalPrice || originalPrice <= price) return 0;
  return Math.round(((originalPrice - price) / originalPrice) * 100);
}

function BookCard({ book, onAddToCart }) {
  const discount = calcDiscount(book.price, book.originalPrice);
  const outOfStock = book.stock === 0;

  return (
    <Card className="h-100 shadow-sm border-0">

      <div className="position-relative">

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

        {discount > 0 && (
          <Badge
            bg="danger"
            className="position-absolute top-0 start-0 m-2"
          >
            -{discount}%
          </Badge>
        )}

        {outOfStock && (
          <Badge
            bg="secondary"
            className="position-absolute top-0 end-0 m-2"
          >
            Hết hàng
          </Badge>
        )}

      </div>

      <Card.Body className="d-flex flex-column">

        <Card.Title className="fs-5">
          {book.title}
        </Card.Title>

        <Card.Text className="text-muted mb-1">
          {book.author}
        </Card.Text>

        {book.rating && (
          <Card.Text className="text-warning mb-2">
            ⭐ {book.rating}

            {book.reviewCount && (
              <span className="text-secondary">
                {" "}
                ({book.reviewCount})
              </span>
            )}
          </Card.Text>
        )}

        <div className="mb-3">

          <span className="fw-bold text-primary fs-5">
            {formatPrice(book.price)}
          </span>

          {book.originalPrice > book.price && (
            <span className="text-decoration-line-through text-muted ms-2">
              {formatPrice(book.originalPrice)}
            </span>
          )}

        </div>

        <Button
          className="mt-auto"
          variant={outOfStock ? "secondary" : "primary"}
          disabled={outOfStock}
          onClick={() => onAddToCart(book)}
        >
          {outOfStock ? "🚫 Hết hàng" : "🛒 Thêm vào giỏ"}
        </Button>

      </Card.Body>

    </Card>
  );
}

export default BookCard;