// SectionWrapper.jsx - Tuần 3
// Người làm: A
// ✅ Reusable wrapper component dùng ≥3 nơi:
//    - BookGrid (section sách bán chạy)
//    - CategoryList (section danh mục)
//    - Banner (section hero banner)
// Props: title, subtitle, backgroundColor, children

function SectionWrapper({
  title,
  subtitle,
  backgroundColor = '#f9fafb',
  children,
}) {
  const styles = {
    section: {
      padding: '48px 24px',
      backgroundColor,
    },

    container: {
      maxWidth: '1100px',
      margin: '0 auto',
    },

    header: {
      marginBottom: subtitle ? '8px' : '32px',
    },

    title: {
      fontSize: '28px',
      fontWeight: '700',
      color: '#111827',
      margin: 0,
    },

    subtitle: {
      fontSize: '15px',
      color: '#6b7280',
      marginTop: '6px',
      marginBottom: '28px',
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* Chỉ render header nếu có title */}
        {title && (
          <div style={styles.header}>
            <h2 style={styles.title}>{title}</h2>
            {subtitle && <p style={styles.subtitle}>{subtitle}</p>}
          </div>
        )}

        {children}
      </div>
    </section>
  );
}

export default SectionWrapper;
