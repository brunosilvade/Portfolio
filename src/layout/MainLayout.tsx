import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";

export const MainLayout = () => {
  return (
    <div>
      <Navbar/>

      <main>
        <Outlet /> {/* Aqui o Home será renderizado */}
      </main>

      <footer>
        <p>© 2026 Bruno Almeida</p>
      </footer>
    </div>
  );
};