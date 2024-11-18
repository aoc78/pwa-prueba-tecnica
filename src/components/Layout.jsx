import React from 'react';
import { useNavigate } from 'react-router-dom';

const Layout = ({ children }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Elimina el token de autenticación
    navigate('/'); // Redirige al home
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="bg-primary text-white p-4 flex justify-between items-center">
        <h1 className="text-lg font-bold cursor-pointer" onClick={() => navigate('/dashboard')}>
          Bank App
        </h1>
        <button
          onClick={handleLogout}
          className="bg-white text-primary px-4 py-2 rounded-md hover:bg-primary-dark hover:text-white"
        >
          Logout
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-6">{children}</main>
    </div>
  );
};

export default Layout;
