import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div>
      <header>
        <h1>Portfolio Bruno Almeida</h1>
      </header>

      <main>
        <Outlet /> {/* Aqui o Home será renderizado */}
      </main>

      <footer>
        <p>© 2026 Bruno Almeida</p>
      </footer>
    </div>
  );
};