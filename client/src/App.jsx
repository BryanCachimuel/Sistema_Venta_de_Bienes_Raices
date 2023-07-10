import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Registro from "./pages/RegisterPage";
import Inicio_Sesion from "./pages/LoginPage";
import RealtyPage from "./pages/RealtyPage";
import RealtyFormPage from "./pages/RealtyFormPage";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";

import ProtectedRoute from './ProtectedRoute'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/iniciar_sesion" element={<Inicio_Sesion />} />
          <Route path="/registro" element={<Registro />} />

          {/* Rutas protegidas */}
          <Route element={<ProtectedRoute/>}>
            <Route path="/bienes_raices" element={<RealtyPage />} />
            <Route path="/crear_bienes_raices" element={<RealtyFormPage />} />
            <Route path="/bienes_raices/:id" element={<RealtyFormPage />} />
            <Route path="/perfil_usuario" element={<ProfilePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
