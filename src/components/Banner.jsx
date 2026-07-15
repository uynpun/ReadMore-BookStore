// Banner.jsx - Tuần 10
// Người làm: A
// ✅ Migrate từ inline CSS → Tailwind CSS v4
// ✅ So sánh: code gọn hơn, dễ responsive, không cần object styles

function Banner() {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-blue-400 text-white text-center py-20 px-5 rounded-xl mx-6 my-6">
      <h1 className="text-4xl font-bold mb-4">
        📚 ReadMore Bookstore
      </h1>

      <p className="text-lg mb-8 text-white/90">
        Khám phá hàng ngàn đầu sách hay từ nhiều thể loại khác nhau.
      </p>

      <button className="bg-white text-blue-600 border-none py-3.5 px-7 rounded-lg text-base font-semibold cursor-pointer hover:bg-blue-50 transition-colors duration-200">
        Khám phá ngay
      </button>
    </section>
  );
}

export default Banner;