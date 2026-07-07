// BookGrid.jsx - Tuần 5
// Người làm: A (Trưởng nhóm)
// ✅ Thay CSS Grid bằng React-Bootstrap Row/Col
// ✅ Responsive 3 breakpoints: xs=12, sm=6, md=4, lg=3
// ✅ Giữ nguyên empty state và SectionWrapper
// ✅ Nhận props { books, onAddToCart }

import { Row, Col } from 'react-bootstrap';
import BookCard from './BookCard';
import SectionWrapper from './SectionWrapper';

function BookGrid({ books = [], onAddToCart }) {
  return (
    // ✅ Dùng SectionWrapper thay vì viết lại section layout
    <SectionWrapper backgroundColor="#f9fafb">
      <div id="bestsellers">
        {/* Header với title + link "Xem tất cả" */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold fs-3 m-0">
            Sách{' '}
            <span className="text-primary">Bán Chạy</span>
          </h2>
          <a href="#" className="text-primary text-decoration-none fw-semibold small">
            Xem tất cả →
          </a>
        </div>

        {/* ✅ Empty state khi không có sách */}
        {books.length === 0 ? (
          <div className="text-center py-5 text-muted">
            <div className="fs-1 mb-2">📭</div>
            <p className="fw-semibold text-secondary mb-1">Chưa có sách nào</p>
            <p className="small text-muted">
              Vui lòng quay lại sau nhé!
            </p>
          </div>
        ) : (
          // ✅ Row/Col thay CSS Grid
          // Responsive: 1 cột (xs) → 2 cột (sm≥576) → 3 cột (md≥768) → 4 cột (lg≥992)
          <Row xs={1} sm={2} md={3} lg={4} className="g-4">
            {books.map((book) => (
              <Col key={book.id}>
                <BookCard
                  book={book}
                  onAddToCart={onAddToCart}
                />
              </Col>
            ))}
          </Row>
        )}
      </div>
    </SectionWrapper>
  );
}




export default BookGrid;
