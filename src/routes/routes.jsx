import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import BankDetail from '../pages/BankDetail';
import Layout from '../components/Layout';


const isAuthenticated = () => {
  return !!localStorage.getItem('authToken');
};

// Componente para rutas privadas
const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/" />;
};

// Componente para manejar rutas no encontradas
const NotFound = () => {
  return <Navigate to={isAuthenticated() ? "/dashboard" : "/"} />;
};

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Ruta pública */}
        <Route path="/" element={<Home />} />

        {/* Rutas privadas */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Layout>
                <Dashboard />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/bank/:id"
          element={
            <PrivateRoute>
              <Layout>
                <BankDetail />
              </Layout>
            </PrivateRoute>
          }
        />

        {/* Ruta para manejar rutas no encontradas */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
