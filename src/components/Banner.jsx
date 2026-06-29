// Banner.jsx - Tuần 3
// Người làm: B
// ✅ Dùng SectionWrapper — lần dùng thứ 3
// Chú ý: Banner có màu nền riêng (gradient), SectionWrapper hỗ trợ qua backgroundColor

import SectionWrapper from './SectionWrapper';

function Banner() {
  const styles = {
    inner: {
      background: 'linear-gradient(135deg, #0d6efd, #4dabf7)',
      color: '#fff',
      textAlign: 'center',
      padding: '80px 20px',
      borderRadius: '12px',
    },

    title: {
      fontSize: '42px',
      fontWeight: '700',
      marginBottom: '16px',
      margin: '0 0 16px 0',
    },

    subtitle: {
      fontSize: '18px',
      marginBottom: '30px',
      color: 'rgba(255,255,255,0.9)',
    },

    button: {
      backgroundColor: '#fff',
      color: '#0d6efd',
      border: 'none',
      padding: '14px 28px',
      borderRadius: '8px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
    },
  };

  return (
    // ✅ Dùng SectionWrapper — lần dùng thứ 3
    // Banner không cần title ở SectionWrapper (title nằm bên trong inner div)
    <SectionWrapper backgroundColor="#f0f4ff">
      <div style={styles.inner}>
        <h1 style={styles.title}>📚 ReadMore Bookstore</h1>

        <p style={styles.subtitle}>
          Khám phá hàng ngàn đầu sách hay từ nhiều thể loại khác nhau.
        </p>

        <button style={styles.button}>Khám phá ngay</button>
      </div>
    </SectionWrapper>
  );
}

export default Banner;