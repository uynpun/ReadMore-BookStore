import { Navbar, Nav, Container, Badge, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Header({ cartCount = 0 }) {
  const NAV_LINKS = [
    { label: "Trang chủ", to: "/" },
    { label: "Danh mục", to: "/categories" },
    { label: "Bán chạy", to: "/bestsellers" },
    { label: "Mới nhất", to: "/new-arrivals" },
  ];

  return (
    <Navbar
      bg="primary"
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
          <span>📚</span>
          <span>ReadMore</span>
        </Navbar.Brand>

        {/* Nút menu mobile */}
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

          {/* Nút giỏ hàng */}
          <Button
            as={NavLink}
            to="/cart"
            variant="outline-light"
            className="position-relative d-flex align-items-center gap-2"
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