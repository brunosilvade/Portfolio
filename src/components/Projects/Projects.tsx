export const Projects = () => {
  const projects = [
    { name: "Projeto 1", stack: ["React", "TypeScript"], desc: "Placeholder para projeto corporativo" },
    { name: "Projeto 2", stack: ["React", "Sass"], desc: "Placeholder para projeto corporativo" },
  ];

  return (
    <section style={{ maxWidth: "900px", margin: "0 auto 3rem auto" }}>
      <h2>Projetos</h2>
      {projects.map((p) => (
        <div key={p.name} style={{ marginBottom: "1rem", padding: "1rem", border: "1px solid #222" }}>
          <h3>{p.name}</h3>
          <p><strong>Stack:</strong> {p.stack.join(", ")}</p>
          <p>{p.desc}</p>
        </div>
      ))}
    </section>
  );
};