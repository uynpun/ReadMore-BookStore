// BookCard.jsx - Tuần 2
// Người làm: B
// Dữ liệu hardcode, Tuần 3 sẽ chuyển sang Props

function BookCard() {
  const styles = {
    card: {
      width: "240px",
      border: "1px solid #ddd",
      borderRadius: "10px",
      overflow: "hidden",
      backgroundColor: "#fff",
      boxShadow: "0 2px 6px rgba(0,0,0,.1)",
    },

    image: {
      width: "100%",
      height: "300px",
      objectFit: "cover",
    },

    body: {
      padding: "15px",
    },

    title: {
      fontSize: "18px",
      fontWeight: "700",
    },

    author: {
      color: "#666",
      margin: "8px 0",
    },

    price: {
      color: "#0d6efd",
      fontSize: "20px",
      fontWeight: "700",
    },
  };

  return (
    <div style={styles.card}>
      <img
        style={styles.image}
        src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80"
        alt="book"
      />

      <div style={styles.body}>
        <h3 style={styles.title}>
          Đắc Nhân Tâm
        </h3>

        <p style={styles.author}>
          Dale Carnegie
        </p>

        <p style={styles.price}>
          129.000đ
        </p>
      </div>
    </div>
  );
}

export default BookCard;