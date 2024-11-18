import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getInstitutions } from "../../services/api";

const BankList = () => {
  const navigate = useNavigate();
  const [banks, setBanks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchBanks = async () => {
      try {
        const institutions = await getInstitutions();
        // Filtrar bancos que tienen TRANSACTIONS y BALANCES en resources, y sólo form_fields de username y password
        const filteredBanks = institutions.results.filter((bank) => {
          const hasRequiredResources =
            bank.resources &&
            bank.resources.includes("TRANSACTIONS") &&
            bank.resources.includes("BALANCES");

          const hasOnlyUsernameAndPassword =
            bank.form_fields.every(
              (field) => field.name === "username" || field.name === "password"
            ) && bank.form_fields.length === 2;

          return hasRequiredResources && hasOnlyUsernameAndPassword;
        });

        setBanks(filteredBanks); // Actualiza el estado con los bancos filtrados
      } catch (err) {
        setError("Failed to load banks.");
      } finally {
        setLoading(false);
      }
    };

    fetchBanks();
  }, []);

  const handleBankClick = (bank) => {
    navigate(`/bank/${bank.id}`, { state: { selectedBank: bank } }); // Pasar banco seleccionado
  };
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="overflow-x-auto w-full">
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-primary text-white">
            <th className="p-3 text-left border border-gray-300">Logo</th>
            <th className="p-3 text-left border border-gray-300">Name</th>
            <th className="p-3 text-left border border-gray-300">Country</th>
            <th className="p-3 text-left border border-gray-300">Status</th>
          </tr>
        </thead>
        <tbody>
          {banks.map((bank) => (
            <tr
              key={bank.id}
              className="hover:bg-primary-dark/10 cursor-pointer"
              onClick={() => handleBankClick(bank)}
            >
              <td className="p-3 border border-gray-300">
                {bank.logo ? (
                  <img
                    src={bank.logo}
                    alt={`${bank.display_name} logo`}
                    className="h-8"
                  />
                ) : (
                  "No Logo"
                )}
              </td>
              <td className="p-3 border border-gray-300">
                {bank.display_name}
              </td>
              <td className="p-3 border border-gray-300">
                {bank.country_code}
              </td>
              <td className="p-3 border border-gray-300">
                <span
                  className={`px-2 py-1 rounded-full ${
                    bank.status === "healthy"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {bank.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BankList;
