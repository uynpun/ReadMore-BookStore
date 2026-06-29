function SectionWrapper({
  title,
 subtitle,
  backgroundColor,
  children,
}) {
  return (
    <section
      style={{
        backgroundColor,
        padding: "40px 24px",
      }}
    >
      <h2>{title}</h2>
      <p>{subtitle}</p>

      {children}
    </section>
  );
}

export default SectionWrapper;