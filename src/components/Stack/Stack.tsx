import "../../styles/components/_stack.scss";

export const Stack = () => {
  const frontendArchitecture = [
    "React",
    "TypeScript",
    "JavaScript (ES6+)",
    "Component Architecture",
    "State Management Patterns",
  ];

  const uiEngineering = [
    "SCSS",
    "CSS3",
    "Responsive Design",
    "Semantic HTML",
    "Accessibility Basics (a11y)",
  ];

  const performanceBestPractices = [
    "Reusable Components",
    "Code Organization",
    "Performance Optimization",
    "SEO Fundamentals",
  ];

  return (
    <section className="stack">
      <div className="container">
        <h2>Competências</h2>

        <div className="stack-categories">
          <div className="stack-category">
            <h3>Arquitetura Frontend</h3>
            <ul>
              {frontendArchitecture.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>

          <div className="stack-category">
            <h3>UI</h3>
            <ul>
              {uiEngineering.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>

          <div className="stack-category">
            <h3>Performance e boas praticas</h3>
            <ul>
              {performanceBestPractices.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};