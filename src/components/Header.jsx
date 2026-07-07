// Header.jsx - Tuần 5
// Người làm: A (Trưởng nhóm)
// ✅ Thay inline CSS bằng React-Bootstrap Navbar
// ✅ Responsive: expand="lg" → hamburger menu trên mobile
// ✅ Badge hiển thị cartCount từ props (lifting state up)

import { Navbar, Nav, Container, Badge, Button } from 'react-bootstrap';

function Header({ cartCount = 0 }) {
  // ✅ Tuần 4: cartCount nhận từ App qua props (không còn hardcode)


  const NAV_LINKS = [
    { label: 'Trang chủ', href: '#' },
    { label: 'Danh mục', href: '#categories' },
    { label: 'Bán chạy', href: '#bestsellers' },
    { label: 'Mới nhất', href: '#new-arrivals' },
  ];

  return (
    // ✅ Navbar: bg="primary", variant="dark", sticky="top"
    // ✅ expand="lg" → collapse thành hamburger khi < lg (992px)
    <Navbar bg="primary" variant="dark" expand="lg" sticky="top"
      className="shadow-sm"
    >
      <Container>
        {/* ✅ Logo — Navbar.Brand */}
        <Navbar.Brand href="#" className="fw-bold fs-5 d-flex align-items-center gap-2">
          <span>📚</span>
          <span>ReadMore</span>
        </Navbar.Brand>

        {/* ✅ Toggle button cho mobile */}
        <Navbar.Toggle aria-controls="main-navbar" />

        {/* ✅ Collapsible nav links */}
        <Navbar.Collapse id="main-navbar">
          <Nav className="me-auto">
            {NAV_LINKS.map((link) => (
              <Nav.Link key={link.label} href={link.href}>
                {link.label}
              </Nav.Link>
            ))}
          </Nav>

          {/* ✅ Cart button với Badge — bên phải */}
          <Button
            variant="outline-light"
            className="position-relative d-flex align-items-center gap-2"
            aria-label={`Giỏ hàng, ${cartCount} sản phẩm`}
          >
            🛒 Giỏ hàng
            {/* ✅ Badge: chỉ hiện khi có sản phẩm */}
            {cartCount > 0 && (
              <Badge
                bg="danger"
                pill
                className="position-absolute top-0 start-100 translate-middle"
              >
                {cartCount}
              </Badge>
            )}
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
