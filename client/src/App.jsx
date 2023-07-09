import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Registro from "./pages/RegisterPage";
import Inicio_Sesion from "./pages/LoginPage";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Pagina Inicio</h1>} />
          <Route path="/iniciar_sesion" element={<Inicio_Sesion />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/bienes_raices" element={<h1>Bienes Raices</h1>} />
          <Route path="/crear_bienes_raices" element={<h1>Crear Bienes Raices</h1>}/>
          <Route path="/bienes_raices/:id" element={<h1>Actualizar Bienes Raices</h1>}/>
          <Route path="/perfil_usuario" element={<h1>Perfil de Usuarios</h1>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
