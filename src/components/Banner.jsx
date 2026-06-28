// Banner.jsx - Tuần 2: Functional Component với inline CSS
// Người làm: B
// Chú ý: Tuần 2 chỉ hiển thị giao diện tĩnh.

function Banner() {
  const styles = {
    banner: {
      background: "linear-gradient(135deg, #0d6efd, #4dabf7)",
      color: "#fff",
      textAlign: "center",
      padding: "80px 20px",
      borderRadius: "12px",
      margin: "24px",
    },

    title: {
      fontSize: "42px",
      fontWeight: "700",
      marginBottom: "16px",
    },

    subtitle: {
      fontSize: "18px",
      marginBottom: "30px",
      color: "rgba(255,255,255,0.9)",
    },

    button: {
      backgroundColor: "#fff",
      color: "#0d6efd",
      border: "none",
      padding: "14px 28px",
      borderRadius: "8px",
      fontSize: "16px",
      fontWeight: "600",
      cursor: "pointer",
    },
  };

  return (
    <section style={styles.banner}>
      <h1 style={styles.title}>
        📚 ReadMore Bookstore
      </h1>

      <p style={styles.subtitle}>
        Khám phá hàng ngàn đầu sách hay từ nhiều thể loại khác nhau.
      </p>

      <button style={styles.button}>
        Khám phá ngay
      </button>
    </section>
  );
}


export default Banner;