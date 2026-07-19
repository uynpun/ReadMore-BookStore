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
      expand="lg"
      sticky="top"
      className={`transition-all duration-300 backdrop-blur-md border-b ${
        theme === "light"
          ? "bg-white/80 border-gray-200 shadow-sm"
          : "bg-slate-900/80 border-slate-800 shadow-md"
      }`}
    >
      <Container>
        {/* Logo */}
        <Navbar.Brand
          as={NavLink}
          to="/"
          className={`font-[Outfit] font-extrabold text-2xl tracking-tight flex items-center gap-2 transition-transform hover:scale-105 ${
            theme === "light" ? "text-blue-600" : "text-blue-400"
          }`}
        >
          <span className="text-2xl">📚</span> ReadMore
        </Navbar.Brand>

        {/* Mobile Menu */}
        <Navbar.Toggle aria-controls="main-navbar" className="border-none focus:ring-2 focus:ring-blue-500" />

        <Navbar.Collapse id="main-navbar">
          {/* Menu */}
          <Nav className="me-auto gap-1">
            {NAV_LINKS.map((link) => (
              <Nav.Link
                key={link.label}
                as={NavLink}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : theme === "light"
                      ? "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`
                }
              >
                {link.label}
              </Nav.Link>
            ))}
          </Nav>

          <div className="flex items-center gap-3 mt-3 mt-lg-0">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Đổi giao diện"
              className={`p-2.5 rounded-full transition-all duration-200 hover:scale-110 active:scale-95 ${
                theme === "light"
                  ? "bg-amber-100 text-amber-600 hover:bg-amber-200"
                  : "bg-slate-800 text-blue-400 hover:bg-slate-700"
              }`}
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>

            {/* Cart — cartCount từ Redux store */}
            <Button
              as={NavLink}
              to="/cart"
              variant="primary"
              className="relative flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold shadow-md shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              aria-label={`Giỏ hàng có ${cartCount} sản phẩm`}
            >
              <span className="text-lg">🛒</span> Giỏ hàng

              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full border-2 border-white animate-bounce shadow-sm">
                  {cartCount}
                </span>
              )}
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;