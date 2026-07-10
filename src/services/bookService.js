// bookService.js - Tuần 8
// Người làm: A
// ✅ Tầng service — tách logic gọi API ra khỏi component
// ✅ Sử dụng axios để gọi REST API từ json-server
// ✅ CRUD đầy đủ: getAll, getById, create, update, delete

import axios from "axios";

// ✅ Base URL của json-server
const API_URL = "http://localhost:3001/books";

// ✅ Tạo axios instance — cấu hình chung 1 lần, dùng ở mọi nơi
const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// =============================================
// 📖 BOOK SERVICE — CRUD Operations
// =============================================

// ✅ GET /books — Lấy tất cả sách
async function getAllBooks() {
  const response = await api.get("/");
  return response.data;
}

// ✅ GET /books/:id — Lấy 1 cuốn sách theo ID
async function getBookById(id) {
  const response = await api.get(`/${id}`);
  return response.data;
}

// ✅ POST /books — Thêm sách mới
async function createBook(bookData) {
  const response = await api.post("/", bookData);
  return response.data;
}

// ✅ PUT /books/:id — Cập nhật sách (toàn bộ)
async function updateBook(id, bookData) {
  const response = await api.put(`/${id}`, bookData);
  return response.data;
}

// ✅ DELETE /books/:id — Xóa sách
async function deleteBook(id) {
  const response = await api.delete(`/${id}`);
  return response.data;
}

// ✅ Export tất cả functions
const bookService = {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
};

export default bookService;
