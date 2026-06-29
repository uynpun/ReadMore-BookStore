// CategoryList.jsx - Tuần 3
// Người làm: B (Võ Trần Phương Uyên)
// Refactor sử dụng Props

function CategoryList({ categories }) {
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
            <div key={category.id} style={styles.item}>
              {category.icon} {category.name}

              {category.name === "Kinh doanh" && (
                <span style={styles.hot}>HOT</span>
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