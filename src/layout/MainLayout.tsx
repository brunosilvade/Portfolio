import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <header style={{ padding: "1.5rem 2rem", borderBottom: "1px solid #222" }}>
        Bruno Almeida
      </header>

      <main style={{ flex: 1, padding: "2rem" }}>
        <Outlet />
      </main>

      <footer style={{ padding: "1.5rem 2rem", borderTop: "1px solid #222" }}>
        © {new Date().getFullYear()} Bruno Almeida
      </footer>
    </div>
  );
};