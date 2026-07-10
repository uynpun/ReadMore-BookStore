// useFetch.js - Tuần 9
// Người làm: A
// ✅ Custom hook — tái sử dụng logic fetch data cho mọi component
// ✅ Quản lý 3 trạng thái: loading, error, data
// ✅ Hỗ trợ refetch (gọi lại API thủ công)
// ✅ Cleanup pattern — tránh setState sau khi unmount

import { useState, useEffect, useCallback } from "react";

/**
 * useFetch — custom hook tái sử dụng logic gọi API
 * @param {Function} fetchFunction - Hàm async trả về data (VD: bookService.getAllBooks)
 * @param {Array} deps - Dependency array, fetch lại khi deps thay đổi
 * @returns {{ data, loading, error, refetch }}
 */
function useFetch(fetchFunction, deps = []) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ Hàm fetch — dùng useCallback để tránh tạo lại mỗi render
  const fetchData = useCallback(async () => {
    let isCancelled = false;

    try {
      setLoading(true);
      setError(null);

      // ✅ Gọi hàm fetch được truyền vào (VD: bookService.getAllBooks)
      const result = await fetchFunction();

      // ✅ Chỉ setState nếu component chưa unmount
      if (!isCancelled) {
        setData(result);
      }
    } catch (err) {
      if (!isCancelled) {
        setError(
          err.response?.data?.message ||
          err.message ||
          "Đã xảy ra lỗi khi tải dữ liệu!"
        );
      }
    } finally {
      if (!isCancelled) {
        setLoading(false);
      }
    }

    // ✅ Trả về cleanup function
    return () => {
      isCancelled = true;
    };
  }, [fetchFunction]);

  // ✅ useEffect — tự động fetch khi mount hoặc deps thay đổi
  useEffect(() => {
    let cleanup;

    async function doFetch() {
      cleanup = await fetchData();
    }

    doFetch();

    // ✅ Cleanup khi unmount hoặc deps thay đổi
    return () => {
      if (cleanup) cleanup();
    };
  }, [fetchData, ...deps]); // eslint-disable-line react-hooks/exhaustive-deps

  // ✅ refetch — cho phép component gọi lại API thủ công
  const refetch = useCallback(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch };
}

export default useFetch;
