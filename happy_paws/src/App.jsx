import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LayoutPrincipal from "./components/templates/LayoutPrincipal";
import SeccionDatosPersonales from "./components/organisms/SeccionDatosPersonales";
import Inicio from "./pages/Inicio";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutPrincipal />}>
          <Route index element={<Inicio />} />
          <Route path="datos-personales" element={<SeccionDatosPersonales />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;