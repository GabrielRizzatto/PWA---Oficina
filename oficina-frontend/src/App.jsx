import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@popperjs/core/dist/cjs/popper.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import Menu from "./componentes/Menu";
import Home from "./componentes/telas/Home";
import Sobre from "./componentes/telas/Sobre";
import Cliente from "./componentes/telas/cliente/Cliente";
import Veiculo from "./componentes/telas/veiculo/Veiculo";
import OrdemServico from "./componentes/telas/ordemServico/OrdemServico";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu />,
    children: [
      { index: true, element: <Home /> },
      { path: "/sobre", element: <Sobre /> },
      { path: "/clientes", element: <Cliente /> },
      { path: "/veiculos", element: <Veiculo /> },
      { path: "/ordens", element: <OrdemServico /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
