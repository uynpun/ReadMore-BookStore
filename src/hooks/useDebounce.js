// useDebounce.js - Tuần 9
// Người làm: A
// ✅ Custom hook — trì hoãn giá trị input để tránh gọi API liên tục
// ✅ Ví dụ: user gõ "abc" → chờ 500ms không gõ thêm → mới cập nhật debouncedValue
// ✅ Giúp giảm số lần re-render và request không cần thiết

import { useState, useEffect } from "react";

/**
 * useDebounce — trì hoãn cập nhật giá trị sau một khoảng delay
 * @param {any} value - Giá trị cần debounce (thường là searchTerm)
 * @param {number} delay - Thời gian trì hoãn (ms), mặc định 500ms
 * @returns {any} debouncedValue - Giá trị đã được debounce
 */
function useDebounce(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // ✅ Đặt timer: sau `delay` ms mới cập nhật debouncedValue
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // ✅ Cleanup: nếu value thay đổi trước khi hết delay → hủy timer cũ
    // → Đây chính là cơ chế debounce!
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]); // Chạy lại khi value hoặc delay thay đổi

  return debouncedValue;
}

export default useDebounce;
