// Header.jsx - Tuần 4: Nhận cartCount qua props (lifting state up)
// Người làm: A (Trưởng nhóm)
// Chú ý: Tuần 2 dùng inline CSS, chưa dùng React-Bootstrap (để Tuần 5)

function Header({ cartCount = 0 }) {
  // ✅ Tuần 4: cartCount nhận từ App qua props (không còn hardcode)


  const NAV_LINKS = [
    { label: 'Trang chủ', href: '#' },
    { label: 'Danh mục', href: '#categories' },
    { label: 'Bán chạy', href: '#bestsellers' },
    { label: 'Mới nhất', href: '#new-arrivals' },
  ];

  // Inline styles — Tuần 5 sẽ thay bằng React-Bootstrap Navbar
  const styles = {
    header: {
      backgroundColor: '#0d6efd',
      padding: '0 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '64px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      textDecoration: 'none',
      color: '#ffffff',
      fontWeight: '700',
      fontSize: '20px',
      letterSpacing: '-0.3px',
    },
    nav: {
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      listStyle: 'none',
      margin: 0,
      padding: 0,
    },
    navLink: {
      color: 'rgba(255,255,255,0.85)',
      textDecoration: 'none',
      padding: '8px 14px',
      borderRadius: '6px',
      fontSize: '15px',
      fontWeight: '500',
    },
    actions: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
    },
    cartBtn: {
      position: 'relative',
      background: 'rgba(255,255,255,0.15)',
      border: '1px solid rgba(255,255,255,0.3)',
      borderRadius: '8px',
      color: '#fff',
      cursor: 'pointer',
      padding: '8px 14px',
      fontSize: '15px',
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      fontWeight: '600',
    },
    badge: {
      position: 'absolute',
      top: '-7px',
      right: '-7px',
      backgroundColor: '#ff4757',
      color: '#fff',
      borderRadius: '50%',
      width: '18px',
      height: '18px',
      fontSize: '11px',
      fontWeight: '700',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      lineHeight: 1,
    },
  };

  return (
    <header style={styles.header}>
      {/* Logo */}
      <a href="#" style={styles.logo}>
        <span>📚</span>
        <span>ReadMore</span>
      </a>

      {/* Nav links — dùng map() để render */}
      <nav aria-label="Main navigation">
        <ul style={styles.nav}>
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href} style={styles.navLink}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Cart icon button — hardcode "0" tuần này */}
      <div style={styles.actions}>
        <button
          style={styles.cartBtn}
          aria-label={`Giỏ hàng, ${cartCount} sản phẩm`}
        >
          🛒 Giỏ hàng
          <span style={styles.badge} aria-hidden="true">
            {cartCount}
          </span>
        </button>
      </div>
    </header>
  );
}

export default Header;
