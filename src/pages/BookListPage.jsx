// BookListPage.jsx - Tuần 8
// Người làm: A
// ✅ Fetch dữ liệu thật từ json-server qua bookService (axios)
// ✅ 3 trạng thái async: loading → success / error
// ✅ useRef focus vào ô tìm kiếm khi mount (giữ từ tuần 7)
// ✅ useEffect cleanup — tránh memory leak khi component unmount

import { useEffect, useRef, useState } from "react";
import { Container, Spinner, Alert } from "react-bootstrap";
import BookGrid from "../components/BookGrid";
import bookService from "../services/bookService";

function BookListPage() {
  // ✅ State quản lý dữ liệu
  const [books, setBooks] = useState([]);

  // ✅ 3 trạng thái async
  const [loading, setLoading] = useState(true);  // Đang tải
  const [error, setError] = useState(null);       // Lỗi (nếu có)

  // ✅ useRef — focus vào ô search khi mount
  const searchRef = useRef(null);

  // ✅ State tìm kiếm local
  const [searchTerm, setSearchTerm] = useState("");

  // ✅ useEffect — fetch dữ liệu khi component mount
  useEffect(() => {
    // Biến cờ tránh setState sau khi unmount (cleanup pattern)
    let isCancelled = false;

    async function fetchBooks() {
      try {
        setLoading(true);
        setError(null);

        // ✅ Gọi API thật qua bookService (axios)
        const data = await bookService.getAllBooks();

        // ✅ Chỉ setState nếu component chưa unmount
        if (!isCancelled) {
          setBooks(data);
        }
      } catch (err) {
        if (!isCancelled) {
          setError(
            err.response?.data?.message ||
            "Không thể tải danh sách sách. Vui lòng kiểm tra json-server!"
          );
        }
      } finally {
        if (!isCancelled) {
          setLoading(false);
        }
      }
    }

    fetchBooks();

    // ✅ Cleanup function — chạy khi component unmount
    return () => {
      isCancelled = true;
      console.log("🧹 Cleanup BookListPage — hủy fetch nếu đang chạy");
    };
  }, []); // ✅ Dependency [] — chỉ fetch 1 lần khi mount

  // ✅ useEffect — focus vào ô search sau khi mount
  useEffect(() => {
    if (searchRef.current) {
      searchRef.current.focus();
    }
  }, []);

  // ✅ Derived State — lọc sách theo searchTerm
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // =============================================
  // 🎨 RENDER — 3 trạng thái: Loading / Error / Success
  // =============================================

  return (
    <Container className="my-4">
      <h2 className="mb-4">📚 Danh sách sách</h2>

      {/* ✅ Ô tìm kiếm với useRef */}
      <input
        ref={searchRef}
        className="form-control mb-4"
        placeholder="🔍 Tìm kiếm sách..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* ✅ Trạng thái 1: LOADING */}
      {loading && (
        <div className="text-center py-5">
          <Spinner animation="border" variant="primary" />
          <p className="mt-3 text-muted">Đang tải dữ liệu...</p>
        </div>
      )}

      {/* ✅ Trạng thái 2: ERROR */}
      {error && !loading && (
        <Alert variant="danger" className="text-center">
          <Alert.Heading>❌ Lỗi</Alert.Heading>
          <p>{error}</p>
          <hr />
          <p className="mb-0 text-muted">
            Hãy chắc chắn đã chạy: <code>npm run server</code>
          </p>
        </Alert>
      )}

      {/* ✅ Trạng thái 3: SUCCESS */}
      {!loading && !error && (
        <>
          <p className="text-muted mb-3">
            Hiển thị {filteredBooks.length} / {books.length} cuốn sách
          </p>
          <BookGrid books={filteredBooks} />
        </>
      )}
    </Container>
  );
}

export default BookListPage;