// BookListPage.jsx - Tuần 9
// Người làm: A
// ✅ Refactor: dùng useFetch thay vì viết useEffect + useState thủ công
// ✅ Refactor: dùng useDebounce cho ô tìm kiếm (tránh filter liên tục)
// ✅ So sánh: code ngắn gọn hơn tuần 8 rất nhiều nhờ custom hooks

import { useEffect, useRef, useState } from "react";
import { Container, Spinner, Alert, Button } from "react-bootstrap";
import BookGrid from "../components/BookGrid";
import bookService from "../services/bookService";
import useFetch from "../hooks/useFetch";
import useDebounce from "../hooks/useDebounce";

function BookListPage() {
  // ✅ useFetch — thay thế toàn bộ useState + useEffect fetch ở tuần 8
  // Trước (tuần 8): 3 useState + 1 useEffect + cleanup → ~35 dòng
  // Sau  (tuần 9): 1 dòng useFetch → tái sử dụng được ở mọi component!
  const {
    data: books,
    loading,
    error,
    refetch,
  } = useFetch(bookService.getAllBooks);

  // ✅ Search state
  const [searchTerm, setSearchTerm] = useState("");

  // ✅ useDebounce — trì hoãn searchTerm 500ms
  // User gõ "react" → chờ 500ms → mới filter
  // → Tránh filter lại mỗi ký tự (hiệu suất tốt hơn)
  const debouncedSearch = useDebounce(searchTerm, 500);

  // ✅ useRef — focus vào ô search khi mount
  const searchRef = useRef(null);

  useEffect(() => {
    if (searchRef.current) {
      searchRef.current.focus();
    }
  }, []);

  // ✅ Derived State — lọc theo debouncedSearch (không phải searchTerm trực tiếp!)
  const filteredBooks = (books || []).filter((book) =>
    book.title.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  // =============================================
  // 🎨 RENDER
  // =============================================

  return (
    <Container className="my-4">
      <h2 className="mb-4">📚 Danh sách sách</h2>

      {/* ✅ Ô tìm kiếm với useRef + useDebounce */}
      <input
        ref={searchRef}
        className="form-control mb-4"
        placeholder="🔍 Tìm kiếm sách (debounce 500ms)..."
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

      {/* ✅ Trạng thái 2: ERROR + nút Thử lại (refetch) */}
      {error && !loading && (
        <Alert variant="danger" className="text-center">
          <Alert.Heading>❌ Lỗi</Alert.Heading>
          <p>{error}</p>
          <hr />
          <p className="mb-2 text-muted">
            Hãy chắc chắn đã chạy: <code>npm run server</code>
          </p>
          {/* ✅ Nút refetch — gọi lại API thủ công */}
          <Button variant="outline-danger" onClick={refetch}>
            🔄 Thử lại
          </Button>
        </Alert>
      )}

      {/* ✅ Trạng thái 3: SUCCESS */}
      {!loading && !error && (
        <>
          <p className="text-muted mb-3">
            Hiển thị {filteredBooks.length} / {(books || []).length} cuốn sách
            {debouncedSearch && (
              <span>
                {" "}— tìm kiếm: "<strong>{debouncedSearch}</strong>"
              </span>
            )}
          </p>
          <BookGrid books={filteredBooks} />
        </>
      )}
    </Container>
  );
}

export default BookListPage;