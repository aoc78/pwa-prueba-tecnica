import belvoAxios from "./Belvoclient";

export const getInstitutions = async () => {
  try {
    const response = await belvoAxios.get("/api/institutions/");
    return response.data;
  } catch (error) {
    console.error("Error fetching institutions:", error);
    throw error;
  }
};
export const getAccounts = async () => {
  try {
    const response = await belvoAxios.get("/api/accounts/");
    return response.data;
  } catch (error) {
    console.error("Error fetching accounts:", error);
    throw error;
  }
};

// Obtener transacciones
export const getTransactions = async ({ linkId, dateFrom, dateTo }) => {
  try {
    const response = await belvoAxios.post('/api/transactions', {
      link: linkId,
      date_from: dateFrom,
      date_to: dateTo,
    });
    return response.data;
  } catch (error) {
    throw new Error('Error fetching transactions');
  }
};

export const createLink = async ({ institution, username, password }) => {
  console.log('hola')
  try {
    console.log('Entra al post')
    const response = await belvoAxios.post("/api/links", {
      institution,
      username,
      password,
    });

    return response.data;
  } catch (error) {
    throw new Error("Error creating link");
  }
};
