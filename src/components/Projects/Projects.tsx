import "../../styles/components/_projects.scss";

export const Projects = () => {
  const projects = [
    { name: "Projeto 1", stack: ["React", "TypeScript"], desc: "Placeholder para projeto corporativo" },
    { name: "Projeto 2", stack: ["React", "Sass"], desc: "Placeholder para projeto corporativo" },
  ];

  return (
    <section className="projects">
      <h2>Projetos</h2>
      {projects.map((p) => (
        <div key={p.name} className="project-card">
          <h3>{p.name}</h3>
          <p><strong>Stack:</strong> {p.stack.join(", ")}</p>
          <p>{p.desc}</p>
        </div>
      ))}
    </section>
  );
};