// CategoryList.jsx - Tuần 3
// Người làm: B (Võ Trần Phương Uyên)
// Refactor sử dụng Props

function CategoryList({ categories }) {
  const styles = {
    container: {
      margin: "24px 0",
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
    <div style={styles.container}>
      {categories.length > 0 ? (
        <div style={styles.list}>
          {categories.map((category) => (
            <div key={category.id} style={styles.item}>
              {category.icon} {category.name}
              {category.name === "Kinh doanh" && (
                <span style={styles.hot}> HOT</span>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p>Không có danh mục.</p>
      )}
    </div>
  );
}


export default CategoryList;