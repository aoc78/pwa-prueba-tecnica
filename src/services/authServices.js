import backendAxios from './backClient';

export const signup = async (userData) => {
  try {
    const response = await backendAxios.post('/auth/signup', userData);
    return response.data;
  } catch (error) {
    console.error('Error during signup:', error);
    throw error;
  }
};

export const login = async (credentials) => {
  try {
    const response = await backendAxios.post('/auth/login', credentials);
    const { access_token } = response.data;
    localStorage.setItem('authToken', access_token); 
    return response.data;
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
};
