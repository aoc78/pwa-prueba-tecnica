import React, { useState, useEffect } from "react";
import BalanceCard from "../components/banks/BalanceCard";
import TransactionList from "../components/banks/TransactionList";
import { useNavigate, useLocation } from "react-router-dom";
import { getTransactions, createLink } from "../services/api";

const BankDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { selectedBank } = location.state || {};

  useEffect(() => {
    const fetchTransactions = async () => {
      if (!selectedBank) return;

      try {
        // Generar el link
        const linkResponse = await createLink({
          institution: selectedBank.name,
          username: "123456", // Sustituye con datos reales
          password: "password123", // Sustituye con datos reales
        });

        // Obtener transacciones
        const transactionsResponse = await getTransactions({
          linkId: linkResponse.id,
          dateFrom: "2024-10-01", // Ajusta las fechas según sea necesario
          dateTo: "2024-10-10",
        });

        setTransactions(transactionsResponse); // Actualizar el estado con las transacciones
      } catch (err) {
        setError(err.message || "Failed to fetch transactions.");
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, [selectedBank]);

  if (!selectedBank) {
    return (
      <div className="min-h-screen bg-background p-6">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 text-primary bg-white px-4 py-2 rounded-md hover:bg-primary-dark hover:text-white"
        >
          ← Back
        </button>
        <p className="text-gray-500">No bank selected. Please go back.</p>
      </div>
    );
  }

  // Calcular ingresos, egresos y total de outflows dinámicamente
  const income = transactions
    .filter((t) => t.type === "INFLOW")
    .reduce((acc, t) => acc + t.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "OUTFLOW")
    .reduce((acc, t) => acc + Math.abs(t.amount), 0);

  return (
    <div className="min-h-screen bg-background p-6">
      {/* Botón Volver */}
      <button
        onClick={() => navigate(-1)} // Volver a la página anterior
        className="mb-6 text-primary bg-white px-4 py-2 rounded-md hover:bg-primary-dark hover:text-white"
      >
        ← Back
      </button>

      {/* Título */}
      <h1 className="text-2xl font-bold text-gray-700 mb-6">Bank Detail</h1>

      {/* Balance */}
      <BalanceCard income={income} expense={expense} />

      {/* Error */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Loading */}
      {loading && <p>Loading transactions...</p>}

      {/* Transactions */}
      {!loading && transactions.length > 0 && (
        <TransactionList transactions={transactions} />
      )}

      {/* Mensaje cuando no hay transacciones */}
      {!loading && transactions.length === 0 && !error && (
        <p className="text-gray-500">No transactions available.</p>
      )}
    </div>
  );
};

export default BankDetail;
