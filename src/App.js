import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Login from './components/Login/Logar.js';
import Signup from './components/Cadastrar/Cadastro.js'; // Importe o componente de Cadastro

function App() {
  const navigate = useNavigate(); // Hook para navegação programática
  const location = useLocation(); // Hook para obter a rota atual

  return (
    <div className="App">
      {/* Exibe os botões apenas se a rota atual não for /login ou /signup */}
      {location.pathname !== '/login' && location.pathname !== '/signup' && (
        <div>
          <button className="btn-login" onClick={() => navigate('/login')}>
            Ir para Login
          </button>
          <button className="btn-signup" onClick={() => navigate('/signup')} style={{ marginLeft: '10px' }}>
            Ir para Cadastro
          </button>
        </div>
      )}

      {/* Configura os roteamentos */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> {/* Nova rota para o Cadastro */}
      </Routes>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
