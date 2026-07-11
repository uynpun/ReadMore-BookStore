// Header.jsx - Tuần 10
// Người làm: B
// ✅ Migrate sang Redux: useSelector(selectCartCount) thay vì props cartCount
// ✅ Không còn nhận cartCount qua props → tự đọc từ Redux store

import { Navbar, Nav, Container, Badge, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartCount } from "../store/cartSlice";
import { useTheme } from "../context/ThemeContext";

function Header() {
  // ✅ Redux: đọc cartCount trực tiếp từ store (không cần props)
  const cartCount = useSelector(selectCartCount);
  const { theme, toggleTheme } = useTheme();

  const NAV_LINKS = [
    { label: "Trang chủ", to: "/" },
    { label: "Danh sách sách", to: "/books" },
    { label: "Quản lý sách", to: "/admin" },
  ];

  return (
    <Navbar
      bg={theme === "light" ? "primary" : "dark"}
      variant="dark"
      expand="lg"
      sticky="top"
      className="shadow-sm"
    >
      <Container>
        {/* Logo */}
        <Navbar.Brand
          as={NavLink}
          to="/"
          className="fw-bold fs-5 d-flex align-items-center gap-2"
        >
          📚 ReadMore
        </Navbar.Brand>

        {/* Mobile Menu */}
        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar">
          {/* Menu */}
          <Nav className="me-auto">
            {NAV_LINKS.map((link) => (
              <Nav.Link
                key={link.label}
                as={NavLink}
                to={link.to}
                end={link.to === "/"}
              >
                {link.label}
              </Nav.Link>
            ))}
          </Nav>

          {/* Theme */}
          <Button
            variant="warning"
            className="me-3"
            onClick={toggleTheme}
            aria-label="Đổi giao diện"
          >
            {theme === "light" ? "🌙 Dark" : "☀️ Light"}
          </Button>

          {/* Cart — cartCount từ Redux store */}
          <Button
            as={NavLink}
            to="/cart"
            variant="outline-light"
            className="position-relative d-flex align-items-center gap-2"
            aria-label={`Giỏ hàng có ${cartCount} sản phẩm`}
          >
            🛒 Giỏ hàng

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