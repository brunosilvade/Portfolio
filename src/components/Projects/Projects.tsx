import "../../styles/components/_projects.scss";

interface Project {
  name: string;
  stack: string[];
  desc: string;
  url: string;
}

export const Projects = () => {
  const projects: Project[] = [
    {
      name: "Projeto Corporativo 1",
      stack: ["React", "TypeScript", "Sass"],
      desc: "Interface moderna com arquitetura modular e responsiva.",
      url: "https://github.com/seuusuario/projeto1",
    },
    {
      name: "Projeto Corporativo 2",
      stack: ["React", "Next.js", "Tailwind"],
      desc: "Produto digital com foco em performance e escalabilidade.",
      url: "https://github.com/seuusuario/projeto2",
    },
    {
      name: "Projeto Corporativo 3",
      stack: ["React", "Redux", "Sass"],
      desc: "Dashboard corporativo com visual limpo e interações suaves.",
      url: "https://github.com/seuusuario/projeto3",
    },
    {
      name: "Projeto Corporativo 4",
      stack: ["React", "Redux", "Sass"],
      desc: "Dashboard corporativo com visual limpo e interações suaves.",
      url: "https://github.com/seuusuario/projeto3",
    },
  ];

  return (
    <section className="projects">
    <div>
      <h2>Projetos</h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
            <ul>
              {p.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </a>
        ))}
      </div>
    </div>
    </section>
  );
};