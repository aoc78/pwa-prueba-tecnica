import React, { useState } from 'react';
import { signup } from '../../services/authServices';

const Signup = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      setError(null);
      await signup(formData); // Enviamos también el nombre en `formData`
      setSuccess(true);
    } catch (err) {
      setError('Signup failed');
    }
  };

  return (
    <form onSubmit={handleSignup} className="flex flex-col gap-4">
      <h2 className="text-lg font-bold text-gray-700">Signup</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleInputChange}
        className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary focus:bg-primary-dark/10"
        required
      />
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
        Signup
      </button>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">Signup successful!</p>}
    </form>
  );
};

export default Signup;
