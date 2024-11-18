/**
 * Filtra las instituciones que soportan TRANSACTIONS en el campo resources.
 * @param {Array} institutions - Lista de instituciones.
 * @returns {Array} - Lista filtrada con instituciones que soportan TRANSACTIONS.
 */
export const filterInstitutionsWithTransactions = (institutions) => {
  return institutions.filter(
    (institution) =>
      institution.resources && institution.resources.includes("TRANSACTIONS")
  );
};
