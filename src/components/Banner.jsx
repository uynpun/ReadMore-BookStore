// Banner.jsx - Tuần 10
// Người làm: A
// ✅ Migrate từ inline CSS → Tailwind CSS v4
// ✅ So sánh: code gọn hơn, dễ responsive, không cần object styles

function Banner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-800 text-white text-center py-24 px-5 rounded-3xl mx-4 sm:mx-6 my-8 shadow-2xl shadow-blue-900/20 fade-in-up">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="relative z-10 max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-[Outfit] font-extrabold mb-6 tracking-tight drop-shadow-lg">
          Khám phá tri thức cùng <br className="hidden sm:block" /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-amber-200">
            ReadMore Bookstore
          </span>
        </h1>

        <p className="text-lg md:text-xl mb-10 text-blue-50 font-medium leading-relaxed drop-shadow-sm max-w-xl mx-auto">
          Khám phá hàng ngàn đầu sách hay từ nhiều thể loại khác nhau. Đọc sách hôm nay, thay đổi ngày mai.
        </p>

        <button className="bg-white text-blue-700 border-none py-3.5 px-8 rounded-full text-lg font-bold cursor-pointer hover:bg-blue-50 hover:text-blue-800 hover:shadow-xl hover:shadow-white/20 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 active:scale-95">
          Khám phá ngay ✨
        </button>
      </div>
    </section>
  );
}

export default Banner;