import React, { useState } from 'react';
import { login } from '../../services/authServices';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setError(null);
      await login(formData);
      window.location.href = '/dashboard';
    } catch (err) {
      setError('Login failed');
    }
  };

  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-4">
      <h2 className="text-lg font-bold text-gray-700">Login</h2>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleInputChange}
        className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary focus:bg-primary-dark/10"
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleInputChange}
        className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary focus:bg-primary-dark/10"
        required
      />
      <button type="submit" className="p-3 bg-primary text-white rounded-md hover:bg-primary-dark">
        Login
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
};

export default Login;
