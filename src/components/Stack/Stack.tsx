import "../../styles/components/_stack.scss";

export const Stack = () => {
  const stacks = [
    { category: "Front-end", items: ["React", "TypeScript", "Sass"] },
    { category: "Arquitetura", items: ["SPA", "Component-based", "Modular"] },
    { category: "API", items: ["REST", "Axios", "Auth Tokens"] },
    { category: "DevOps", items: ["Docker", "Vercel", "CI/CD"] },
    { category: "Testes", items: ["Jest", "React Testing Library"] },
  ];

  return (
    <section className="stack">
      <h2>Stack Técnica</h2>
      {stacks.map((s) => (
        <div key={s.category}>
          <strong>{s.category}:</strong> {s.items.join(", ")}
        </div>
      ))}
    </section>
  );
};