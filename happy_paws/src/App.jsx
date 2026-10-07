import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CarritoProvider } from "./context/CarritoContext.jsx";
import LayoutPrincipal from "./components/templates/LayoutPrincipal";
import SeccionDatosPersonales from "./components/organisms/SeccionDatosPersonales";
import Inicio from "./pages/Inicio";

function App() {
  return (
    <CarritoProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<LayoutPrincipal />}>
            <Route index element={<Inicio />} />
            <Route path="datos-personales" element={<SeccionDatosPersonales />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CarritoProvider>
  );
}

export default App;