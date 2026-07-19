import { Container } from "react-bootstrap";

function CategoryList({
  categories,
  activeCategory,
  setActiveCategory,
}) {
  return (
    <Container className="my-6 fade-in-up">
      {categories.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-3">
          {/* Tất cả */}
          <button
            className={`px-5 py-2.5 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm hover:shadow-md ${
              !activeCategory
                ? "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-blue-500/30 border-none"
                : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-slate-700"
            }`}
            onClick={() => setActiveCategory(null)}
          >
            📖 Tất cả
          </button>

          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-5 py-2.5 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm hover:shadow-md flex items-center gap-2 ${
                activeCategory === category.name
                  ? "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-blue-500/30 border-none"
                  : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-slate-700"
              }`}
              onClick={() => setActiveCategory(category.name)}
            >
              <span>{category.icon}</span> {category.name}

              {category.name === "Kinh doanh" && (
                <span className="ml-1 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider animate-pulse">
                  Hot
                </span>
              )}
            </button>
          ))}
        </div>
      ) : (
        <p className="text-center text-slate-500 font-medium bg-slate-50 py-8 rounded-xl border border-dashed border-slate-300">
          Không có danh mục.
        </p>
      )}
    </Container>
  );
}

export default CategoryList;