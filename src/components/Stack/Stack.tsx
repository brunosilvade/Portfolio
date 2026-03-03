import "../../styles/components/_stack.scss";

export const Stack = () => {
  const skills = [
    "React",
    "TypeScript",
    "Sass",
    "Git",
    "Vite",
    "React Router",
  ];

  return (
    <section className="stack">
      <div>
      <h2>Stack Técnica</h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      </div>
    </section>
  );
};