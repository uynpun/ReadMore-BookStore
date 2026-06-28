// Footer.jsx - Tuần 2: Functional Component với inline CSS
// Người làm: A (Trưởng nhóm)

function Footer() {
  const currentYear = new Date().getFullYear();

  const styles = {
    footer: {
      backgroundColor: '#1a1a2e',
      color: '#adb5bd',
      padding: '40px 24px 20px',
      marginTop: 'auto',
    },
    container: {
      maxWidth: '1100px',
      margin: '0 auto',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '32px',
      marginBottom: '32px',
    },
    brandCol: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
    },
    brandLogo: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '18px',
      fontWeight: '700',
      color: '#ffffff',
    },
    brandDesc: {
      fontSize: '14px',
      lineHeight: '1.6',
      color: '#adb5bd',
    },
    colTitle: {
      color: '#ffffff',
      fontWeight: '600',
      fontSize: '15px',
      marginBottom: '12px',
      display: 'block',
    },
    linkList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
    },
    link: {
      color: '#adb5bd',
      textDecoration: 'none',
      fontSize: '14px',
    },
    divider: {
      borderColor: '#2e2e4e',
      margin: '0 0 16px',
    },
    bottom: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: '13px',
      flexWrap: 'wrap',
      gap: '8px',
    },
    copyright: {
      color: '#6c757d',
    },
  };

  const QUICK_LINKS = [
    { label: 'Về chúng tôi', href: '#' },
    { label: 'Tác giả', href: '#' },
    { label: 'Bestsellers', href: '#' },
    { label: 'Mới nhất', href: '#' },
  ];

  const CATEGORIES = [
    { label: 'Tâm lý - Kỹ năng sống', href: '#' },
    { label: 'Văn học', href: '#' },
    { label: 'Lịch sử', href: '#' },
    { label: 'Kinh doanh', href: '#' },
  ];

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.grid}>
          {/* Cột 1: Brand */}
          <div style={styles.brandCol}>
            <div style={styles.brandLogo}>
              <span>📚</span>
              <span>ReadMore Bookstore</span>
            </div>
            <p style={styles.brandDesc}>
              Điểm đến của những cuốn sách hay, những tác giả tài năng
              và cộng đồng yêu đọc sách.
            </p>
          </div>

          {/* Cột 2: Quick Links */}
          <div>
            <span style={styles.colTitle}>Liên kết nhanh</span>
            <ul style={styles.linkList}>
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} style={styles.link}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Cột 3: Categories */}
          <div>
            <span style={styles.colTitle}>Danh mục</span>
            <ul style={styles.linkList}>
              {CATEGORIES.map((cat) => (
                <li key={cat.label}>
                  <a href={cat.href} style={styles.link}>
                    {cat.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Cột 4: Newsletter */}
          <div>
            <span style={styles.colTitle}>Nhận tin mới</span>
            <p style={{ ...styles.brandDesc, marginBottom: '12px' }}>
              Nhận thông báo sách mới và ưu đãi độc quyền.
            </p>
            <div style={{ display: 'flex', gap: '8px' }}>
              <input
                type="email"
                placeholder="Email của bạn"
                style={{
                  flex: 1,
                  padding: '8px 12px',
                  borderRadius: '6px',
                  border: '1px solid #2e2e4e',
                  background: '#2e2e4e',
                  color: '#fff',
                  fontSize: '14px',
                  outline: 'none',
                }}
              />
              <button
                style={{
                  padding: '8px 14px',
                  background: '#0d6efd',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '14px',
                }}
              >
                Đăng ký
              </button>
            </div>
          </div>
        </div>

        <hr style={styles.divider} />

        {/* Bottom bar */}
        <div style={styles.bottom}>
          <span style={styles.copyright}>
            © {currentYear} ReadMore Bookstore. All rights reserved.
          </span>
          <span style={styles.copyright}>
            Privacy Policy · Terms of Service
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
