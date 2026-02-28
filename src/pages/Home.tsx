export const Home = () => {
  return (
    <section style={{ maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
        Desenvolvedor Front-end Pleno
      </h1>

      <p style={{ fontSize: "1.1rem", color: "#aaa", marginBottom: "2rem" }}>
        Especialista em React, TypeScript e arquitetura de aplicações escaláveis.
        Foco em código limpo, organização modular e boas práticas.
      </p>

      <div style={{ marginBottom: "3rem" }}>
        <h2 style={{ marginBottom: "1rem" }}>Stack Principal</h2>
        <ul style={{ lineHeight: "1.8" }}>
          <li>React + TypeScript</li>
          <li>Arquitetura SPA modular</li>
          <li>Integração com APIs REST</li>
          <li>Testes unitários</li>
          <li>Docker & Deploy (Vercel)</li>
        </ul>
      </div>

      <div>
        <h2 style={{ marginBottom: "1rem" }}>Projetos</h2>
        <p style={{ color: "#888" }}>
          Projetos em desenvolvimento. Estrutura preparada para aplicações reais
          com foco em escalabilidade e boas práticas.
        </p>
      </div>
    </section>
  );
};