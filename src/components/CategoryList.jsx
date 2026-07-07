 // CategoryList.jsx - Tuần 4
// Refactor sử dụng Props + Filter Category

function CategoryList({
  categories,
  activeCategory,
  setActiveCategory,
}) {
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
      transition: "0.3s",
    },

    activeItem: {
      padding: "12px 18px",
      border: "1px solid #0d6efd",
      borderRadius: "8px",
      backgroundColor: "#0d6efd",
      color: "#fff",
      cursor: "pointer",
      transition: "0.3s",
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
          {/* Nút hiển thị tất cả */}
          <div
            style={!activeCategory ? styles.activeItem : styles.item}
            onClick={() => setActiveCategory(null)}
          >
            📖 Tất cả
          </div>

          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => setActiveCategory(category.name)}
              style={
                activeCategory === category.name
                  ? styles.activeItem
                  : styles.item
              }
            >
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