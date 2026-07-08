// NotFoundPage.jsx - Tuần 6
// Người làm: A (Trưởng nhóm)
// ✅ Trang 404 Not Found
// ✅ Dùng React-Bootstrap Container + Button
// ✅ Link quay về trang chủ dùng react-router-dom

import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <Container className="text-center py-5" style={{ minHeight: '60vh' }}>
      <div style={{ fontSize: '120px', lineHeight: 1 }}>📭</div>
      <h1 className="display-4 fw-bold mt-3">404</h1>
      <p className="fs-5 text-muted mb-4">
        Trang bạn tìm kiếm không tồn tại hoặc đã bị xóa.
      </p>
      <Link to="/">
        <Button variant="primary" size="lg">
          🏠 Quay về Trang chủ
        </Button>
      </Link>
    </Container>
  );
}

export default NotFoundPage;
