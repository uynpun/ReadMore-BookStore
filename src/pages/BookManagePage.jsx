import { useState, useEffect } from "react";
import {
  Container,
  Card,
  Form,
  Button,
  Table,
  Row,
  Col,
  Alert,
  Spinner,
} from "react-bootstrap";

import bookService from "../services/bookService";

function BookManagePage() {
  const [books, setBooks] = useState([]);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [cover, setCover] = useState("");

  const [editingId, setEditingId] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // =========================
  // Load danh sách sách
  // =========================
  useEffect(() => {
    fetchBooks();
  }, []);

  async function fetchBooks() {
    try {
      setLoading(true);
      setError("");

      const data = await bookService.getAllBooks();
      setBooks(data);
    } catch (err) {
      setError("Không thể tải danh sách sách.");
    } finally {
      setLoading(false);
    }
  }

  // =========================
  // Thêm hoặc cập nhật sách
  // =========================
  async function handleSubmit(e) {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!title || !author || !price || !stock || !cover) {
      setError("Vui lòng nhập đầy đủ thông tin.");
      return;
    }

    const bookData = {
      title,
      author,
      price: Number(price),
      stock: Number(stock),
      cover,

      originalPrice: Number(price),
      category: "Khác",
      categoryId: 0,
      rating: 5,
      reviewCount: 0,
      featured: false,
      description: "",
    };

    try {
      setLoading(true);

      if (editingId) {
        await bookService.updateBook(editingId, {
          id: editingId,
          ...bookData,
        });

        setSuccess("Cập nhật sách thành công!");
      } else {
        await bookService.createBook(bookData);

        setSuccess("Thêm sách thành công!");
      }

      fetchBooks();

      setEditingId(null);
      setTitle("");
      setAuthor("");
      setPrice("");
      setStock("");
      setCover("");
    } catch (err) {
      setError("Không thể lưu dữ liệu.");
    } finally {
      setLoading(false);
    }
  }

  // =========================
  // Chỉnh sửa
  // =========================
  function handleEdit(book) {
    setEditingId(book.id);

    setTitle(book.title);
    setAuthor(book.author);
    setPrice(book.price);
    setStock(book.stock);
    setCover(book.cover);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  // =========================
  // Xóa sách
  // =========================
  async function handleDelete(id) {
    const confirmDelete = window.confirm(
      "Bạn có chắc muốn xóa cuốn sách này?"
    );

    if (!confirmDelete) return;

    try {
      setLoading(true);

      await bookService.deleteBook(id);

      setSuccess("Xóa sách thành công!");

      fetchBooks();
    } catch {
      setError("Không thể xóa sách.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container className="my-5">

      <Card className="shadow-sm mb-4">
        <Card.Body>

          <h2 className="mb-4">
            📚 Quản lý sách
          </h2>

          {error && (
            <Alert variant="danger">
              {error}
            </Alert>
          )}

          {success && (
            <Alert variant="success">
              {success}
            </Alert>
          )}

          <Form onSubmit={handleSubmit}>

            <Row>

              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Tên sách</Form.Label>

                  <Form.Control
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Nhập tên sách"
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Tác giả</Form.Label>

                  <Form.Control
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="Nhập tên tác giả"
                  />
                </Form.Group>
              </Col>

            </Row>

            <Row>

              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Giá</Form.Label>

                  <Form.Control
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </Form.Group>
              </Col>

              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Tồn kho</Form.Label>

                  <Form.Control
                    type="number"
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                  />
                </Form.Group>
              </Col>

              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Ảnh bìa</Form.Label>

                  <Form.Control
                    value={cover}
                    onChange={(e) => setCover(e.target.value)}
                    placeholder="https://..."
                  />
                </Form.Group>
              </Col>

            </Row>

            <Button type="submit" variant="primary">
              {editingId ? "Cập nhật sách" : "Thêm sách"}
            </Button>

          </Form>

        </Card.Body>
      </Card>
            <Card className="shadow-sm">
        <Card.Body>

          <h4 className="mb-3">
            Danh sách sách
          </h4>

          {loading ? (
            <div className="text-center py-5">
              <Spinner animation="border" variant="primary" />
            </div>
          ) : books.length === 0 ? (
            <Alert variant="info">
              Chưa có sách nào.
            </Alert>
          ) : (
            <Table bordered hover responsive striped>

              <thead className="table-dark">
                <tr>
                  <th>ID</th>
                  <th>Ảnh</th>
                  <th>Tên sách</th>
                  <th>Tác giả</th>
                  <th>Giá</th>
                  <th>Tồn kho</th>
                  <th width="170">Thao tác</th>
                </tr>
              </thead>

              <tbody>

                {books.map((book) => (

                  <tr key={book.id}>

                    <td>{book.id}</td>

                    <td>
                      <img
                        src={book.cover}
                        alt={book.title}
                        width="60"
                        height="80"
                        style={{
                          objectFit: "cover",
                          borderRadius: "6px",
                        }}
                      />
                    </td>

                    <td>{book.title}</td>

                    <td>{book.author}</td>

                    <td>
                      {Number(book.price).toLocaleString("vi-VN")}₫
                    </td>

                    <td>{book.stock}</td>

                    <td>

                      <Button
                        variant="warning"
                        size="sm"
                        className="me-2"
                        onClick={() => handleEdit(book)}
                      >
                        ✏️ Sửa
                      </Button>

                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleDelete(book.id)}
                      >
                        🗑 Xóa
                      </Button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </Table>
          )}

        </Card.Body>
      </Card>

    </Container>
  );
}

export default BookManagePage;