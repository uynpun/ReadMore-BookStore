import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Badge, Button, Spinner, Alert } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import bookService from "../services/bookService";
import toast from "react-hot-toast";

function BookDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBook() {
      try {
        setLoading(true);
        const data = await bookService.getBookById(id);
        setBook(data);
        setError(null);
      } catch (err) {
        setError("Không tìm thấy sách hoặc lỗi kết nối server.");
      } finally {
        setLoading(false);
      }
    }
    fetchBook();
  }, [id]);

  function handleAddToCart() {
    dispatch(addToCart(book));
    toast.success(`Đã thêm "${book.title}" vào giỏ hàng!`);
  }

  if (loading) {
    return (
      <Container className="text-center py-5">
        <Spinner animation="border" variant="primary" />
        <p className="mt-3 text-muted">Đang tải thông tin sách...</p>
      </Container>
    );
  }

  if (error || !book) {
    return (
      <Container className="mt-5 text-center">
        <Alert variant="danger">{error || "Không tìm thấy sách."}</Alert>
        <Button variant="primary" onClick={() => navigate(-1)}>
          ← Quay lại
        </Button>
      </Container>
    );
  }

  const outOfStock = book.stock === 0;
  const discount =
    book.originalPrice && book.originalPrice > book.price
      ? Math.round(((book.originalPrice - book.price) / book.originalPrice) * 100)
      : 0;

  return (
    <Container className="my-5">
      {/* Breadcrumb */}
      <nav className="mb-4">
        <span
          className="text-primary"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          Trang chủ
        </span>
        {" > "}
        <span
          className="text-primary"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/books")}
        >
          Sách
        </span>
        {" > "}
        <span className="text-muted">{book.title}</span>
      </nav>

      <Row>
        <Col md={5}>
          <div className="position-relative">
            <img
              src={book.cover}
              alt={book.title}
              className="img-fluid rounded shadow"
              style={{ width: "100%", maxHeight: "500px", objectFit: "cover" }}
            />
            {discount > 0 && (
              <Badge
                bg="danger"
                className="position-absolute top-0 start-0 m-3 fs-6"
              >
                -{discount}%
              </Badge>
            )}
          </div>
        </Col>

        <Col md={7}>
          <h2 className="fw-bold mb-2">{book.title}</h2>

          <p className="text-muted mb-3">Tác giả: {book.author}</p>

          {book.category && (
            <Badge bg="info" className="mb-3">
              {book.category}
            </Badge>
          )}

          <div className="mb-3">
            <span className="text-primary fw-bold fs-3">
              {book.price.toLocaleString("vi-VN")}₫
            </span>
            {book.originalPrice > book.price && (
              <span className="text-decoration-line-through text-secondary ms-3 fs-5">
                {book.originalPrice.toLocaleString("vi-VN")}₫
              </span>
            )}
          </div>

          {book.rating && (
            <p className="mb-2">
              <Badge bg="warning" text="dark" className="me-2 fs-6">
                ⭐ {book.rating}
              </Badge>
              {book.reviewCount && (
                <span className="text-muted">({book.reviewCount} đánh giá)</span>
              )}
            </p>
          )}

          <p className="mb-3">
            Tình trạng:{" "}
            {outOfStock ? (
              <span className="text-danger fw-semibold">Hết hàng</span>
            ) : (
              <span className="text-success fw-semibold">
                Còn {book.stock} sản phẩm
              </span>
            )}
          </p>

          {book.description && (
            <div className="mb-4">
              <h5 className="fw-bold">Mô tả</h5>
              <p className="text-muted">{book.description}</p>
            </div>
          )}

          <div className="d-flex gap-3">
            <Button
              variant="primary"
              size="lg"
              disabled={outOfStock}
              onClick={handleAddToCart}
            >
              {outOfStock ? "🚫 Hết hàng" : "🛒 Thêm vào giỏ"}
            </Button>
            <Button
              variant="outline-secondary"
              size="lg"
              onClick={() => navigate(-1)}
            >
              ← Quay lại
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default BookDetailPage;