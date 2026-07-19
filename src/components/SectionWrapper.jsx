// SectionWrapper.jsx - Cập nhật cho Dark Mode & Tailwind

function SectionWrapper({
  title,
  subtitle,
  className = "",
  children,
}) {
  return (
    <section className={`py-12 px-6 transition-colors duration-300 ${className}`}>
      <div className="max-w-6xl mx-auto">
        {title && (
          <div className={`text-center ${subtitle ? "mb-4" : "mb-10"}`}>
            <h2 className="text-3xl font-[Outfit] font-bold text-[var(--text)] m-0">
              {title}
            </h2>
            {subtitle && (
              <p className="text-base text-[var(--text-muted)] mt-2 mb-10">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {children}
      </div>
    </section>
  );
}

export default SectionWrapper;