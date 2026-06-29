// CategoryList.jsx - Tuần 3
// Người làm: B
// ✅ Dùng SectionWrapper
// ✅ Dùng map(), && và toán tử ba ngôi (giữ nguyên logic tuần 2)

import SectionWrapper from './SectionWrapper';

function CategoryList() {
  const categories = [
    '🧠 Tâm lý - Kỹ năng sống',
    '📚 Văn học',
    '🏛️ Lịch sử',
    '💼 Kinh doanh',
    '🌱 Phát triển bản thân',
  ];

  const styles = {
    list: {
      display: 'flex',
      gap: '15px',
      flexWrap: 'wrap',
    },

    item: {
      padding: '12px 18px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      backgroundColor: '#fff',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: '500',
      color: '#374151',
    },

    hot: {
      color: 'red',
      marginLeft: '8px',
      fontWeight: '700',
      fontSize: '12px',
    },
  };

  return (
    // ✅ Dùng SectionWrapper — lần dùng thứ 2
    <SectionWrapper
      title="Danh mục sách"
      subtitle="Khám phá sách theo chủ đề yêu thích của bạn"
      backgroundColor="#ffffff"
    >
      {categories.length > 0 ? (
        <div style={styles.list}>
          {categories.map((category) => (
            <div key={category} style={styles.item}>
              {category}

              {category.includes('Kinh doanh') && (
                <span style={styles.hot}>HOT</span>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p>Không có danh mục.</p>
      )}
    </SectionWrapper>
  );
}

export default CategoryList;