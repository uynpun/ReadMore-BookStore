import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";

function BookDetailPage({ books = [], onAddToCart }) {
  const { id } = useParams();

  const book = books.find((b) => b.id === Number(id));

  if (!book) {
    return (
      <Container className="mt-5 text-center">
        <h3>Không tìm thấy sách.</h3>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <Row>
        <Col md={5}>
          <img
            src={book.cover}
            alt={book.title}
            className="img-fluid rounded shadow"
          />
        </Col>

        <Col md={7}>
          <h2>{book.title}</h2>

          <p className="text-muted">{book.author}</p>

          <h3 className="text-primary">
            {book.price.toLocaleString("vi-VN")}₫
          </h3>

          {book.originalPrice > book.price && (
            <p className="text-decoration-line-through text-secondary">
              {book.originalPrice.toLocaleString("vi-VN")}₫
            </p>
          )}

          <Badge bg="warning" text="dark">
            ⭐ {book.rating}
          </Badge>

          <p className="mt-3">
            Còn lại: <strong>{book.stock}</strong> sản phẩm
          </p>

          <Button
            variant="primary"
            onClick={() => onAddToCart(book)}
          >
            🛒 Thêm vào giỏ
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default BookDetailPage;