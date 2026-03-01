import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { MainLayout } from "../layout/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // Futuras rotas podem ser adicionadas aqui
      // { path: "/projects", element: <Projects /> }
    ],
  },
]);