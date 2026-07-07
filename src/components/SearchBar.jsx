// SearchBar.jsx - Tuần 4
// Người làm: A (Trưởng nhóm)
// ✅ Controlled component với useState
// ✅ Validation: tối thiểu 2 ký tự
// ✅ Nút Clear để xóa từ khóa tìm kiếm
// ✅ Gọi onSearch callback khi input thay đổi (nếu hợp lệ)

import { useState } from 'react';

function SearchBar({ onSearch }) {
  // ✅ useState — controlled input
  const [searchTerm, setSearchTerm] = useState('');

  // ✅ Validation: chỉ gọi onSearch khi >= 2 ký tự hoặc rỗng (reset)
  function handleChange(e) {
    const value = e.target.value;
    setSearchTerm(value);

    // Gọi onSearch: nếu rỗng thì reset, nếu >= 2 ký tự thì tìm kiếm
    if (value.trim().length === 0) {
      onSearch && onSearch('');
    } else if (value.trim().length >= 2) {
      onSearch && onSearch(value.trim());
    }
    // Nếu 1 ký tự → không gọi onSearch (chờ nhập thêm)
  }

  // ✅ Nút Clear — xóa input và reset kết quả
  function handleClear() {
    setSearchTerm('');
    onSearch && onSearch('');
  }

  // Inline styles
  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      maxWidth: '480px',
      margin: '0 auto',
    },
    inputWrapper: {
      position: 'relative',
      flex: 1,
    },
    icon: {
      position: 'absolute',
      left: '12px',
      top: '50%',
      transform: 'translateY(-50%)',
      fontSize: '16px',
      color: '#9ca3af',
      pointerEvents: 'none',
    },
    input: {
      width: '100%',
      padding: '10px 40px 10px 38px',
      border: '2px solid #e5e7eb',
      borderRadius: '10px',
      fontSize: '15px',
      outline: 'none',
      transition: 'border-color 0.2s',
      backgroundColor: '#fff',
      color: '#111827',
    },
    clearBtn: {
      position: 'absolute',
      right: '10px',
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'none',
      border: 'none',
      fontSize: '16px',
      cursor: 'pointer',
      color: '#9ca3af',
      padding: '2px 4px',
      borderRadius: '4px',
      lineHeight: 1,
    },
    hint: {
      fontSize: '12px',
      color: '#9ca3af',
      marginTop: '4px',
      textAlign: 'center',
    },
  };

  // ✅ Hiển thị hint khi nhập 1 ký tự (chưa đủ để tìm kiếm)
  const showHint = searchTerm.trim().length === 1;

  return (
    <div>
      <div style={styles.container}>
        <div style={styles.inputWrapper}>
          {/* Icon tìm kiếm */}
          <span style={styles.icon}>🔍</span>

          {/* ✅ Controlled input — value luôn gắn với state */}
          <input
            type="text"
            placeholder="Tìm kiếm sách..."
            value={searchTerm}
            onChange={handleChange}
            style={styles.input}
            aria-label="Tìm kiếm sách"
          />

          {/* ✅ Nút Clear — chỉ hiện khi có nội dung */}
          {searchTerm.length > 0 && (
            <button
              style={styles.clearBtn}
              onClick={handleClear}
              aria-label="Xóa tìm kiếm"
              type="button"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* ✅ Hint validation — nhập ít nhất 2 ký tự */}
      {showHint && (
        <p style={styles.hint}>Nhập ít nhất 2 ký tự để tìm kiếm</p>
      )}
    </div>
  );
}

export default SearchBar;
