// CategoryList.jsx - Tuần 2
// Người làm: B
// Dùng map(), && và toán tử ba ngôi

function CategoryList() {
  const categories = [
    "🧠 Tâm lý - Kỹ năng sống",
    "📚 Văn học",
    "🏛️ Lịch sử",
    "💼 Kinh doanh",
    "🌱 Phát triển bản thân",
  ];

  const styles = {
    container: {
      margin: "24px",
    },

    title: {
      marginBottom: "20px",
    },

    list: {
      display: "flex",
      gap: "15px",
      flexWrap: "wrap",
    },

    item: {
      padding: "12px 18px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      backgroundColor: "#fff",
      cursor: "pointer",
    },

    hot: {
      color: "red",
      marginLeft: "8px",
      fontWeight: "700",
    },
  };

  return (
    <section style={styles.container}>
      <h2 style={styles.title}>Danh mục sách</h2>

      {categories.length > 0 ? (
        <div style={styles.list}>
          {categories.map((category) => (
            <div key={category} style={styles.item}>
              {category}

              {category.includes("Kinh doanh") && (
                <span style={styles.hot}>
                  HOT
                </span>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p>Không có danh mục.</p>
      )}
    </section>
  );
}

export default CategoryList;