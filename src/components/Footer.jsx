// Footer.jsx - Giao diện nâng cấp Tailwind CSS v4
// Đã loại bỏ inline CSS để code gọn gàng, dễ bảo trì và responsive tốt hơn

function Footer() {
  const currentYear = new Date().getFullYear();

  const QUICK_LINKS = [
    { label: 'Về chúng tôi', href: '#' },
    { label: 'Tác giả', href: '#' },
    { label: 'Bestsellers', href: '#' },
    { label: 'Mới nhất', href: '#' },
  ];

  const CATEGORIES = [
    { label: 'Tâm lý - Kỹ năng sống', href: '#' },
    { label: 'Văn học', href: '#' },
    { label: 'Lịch sử', href: '#' },
    { label: 'Kinh doanh', href: '#' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 mt-auto border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Cột 1: Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 font-[Outfit] text-2xl font-bold text-white">
              <span>📚</span>
              <span>ReadMore</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Điểm đến của những cuốn sách hay, những tác giả tài năng
              và cộng đồng yêu đọc sách. Chúng tôi mang tri thức đến mọi nhà.
            </p>
          </div>

          {/* Cột 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase text-sm tracking-wider">Liên kết nhanh</h3>
            <ul className="flex flex-col gap-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-slate-400 hover:text-blue-400 hover:pl-2 transition-all duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Cột 3: Categories */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase text-sm tracking-wider">Danh mục</h3>
            <ul className="flex flex-col gap-3">
              {CATEGORIES.map((cat) => (
                <li key={cat.label}>
                  <a href={cat.href} className="text-sm text-slate-400 hover:text-blue-400 hover:pl-2 transition-all duration-300">
                    {cat.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Cột 4: Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase text-sm tracking-wider">Nhận tin mới</h3>
            <p className="text-sm text-slate-400 mb-4">
              Nhận thông báo sách mới và ưu đãi độc quyền.
            </p>
            <form className="flex flex-col sm:flex-row gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email của bạn"
                className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg px-6 py-2.5 text-sm transition-colors duration-200 flex-shrink-0"
              >
                Đăng ký
              </button>
            </form>
          </div>
        </div>

        <div className="h-px w-full bg-slate-800 mb-8"></div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <span>
            © {currentYear} ReadMore Bookstore. All rights reserved.
          </span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
