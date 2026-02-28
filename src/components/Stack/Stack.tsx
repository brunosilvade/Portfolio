export const Stack = () => {
  const stacks = [
    { category: "Front-end", items: ["React", "TypeScript", "Sass"] },
    { category: "Arquitetura", items: ["SPA", "Component-based", "Modular"] },
    { category: "API", items: ["REST", "Axios", "Auth Tokens"] },
    { category: "DevOps", items: ["Docker", "Vercel", "CI/CD"] },
    { category: "Testes", items: ["Jest", "React Testing Library"] },
  ];

  return (
    <section style={{ maxWidth: "900px", margin: "0 auto 3rem auto" }}>
      <h2 style={{ marginBottom: "1rem" }}>Stack Técnica</h2>
      {stacks.map((s) => (
        <div key={s.category} style={{ marginBottom: "0.8rem" }}>
          <strong>{s.category}:</strong> {s.items.join(", ")}
        </div>
      ))}
    </section>
  );
};
