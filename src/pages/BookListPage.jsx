import { useEffect, useRef, useState } from "react";
import BookGrid from "../components/BookGrid";

function BookListPage() {
  const [books, setBooks] = useState([]);

  const searchRef = useRef(null);

  useEffect(() => {
    searchRef.current.focus();

    // Mock fetch
    setTimeout(() => {
      setBooks([
        {
          id: 1,
          title: "Đắc Nhân Tâm",
          author: "Dale Carnegie",
          price: 129000,
          originalPrice: 159000,
          cover:
            "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
          stock: 10,
        },
      ]);
    }, 500);

    return () => {
      console.log("Cleanup BookListPage");
    };
  }, []);

  return (
    <div className="container mt-4">

      <h2>Danh sách sách</h2>

      <input
        ref={searchRef}
        className="form-control mb-4"
        placeholder="Tìm kiếm..."
      />

      <BookGrid books={books} />
    </div>
  );
}

export default BookListPage;