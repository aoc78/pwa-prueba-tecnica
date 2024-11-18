import React from "react";

const TransactionList = ({ transactions }) => {
  const formatDate = (isoDate) => {
    if (!isoDate) return "N/A";
    const date = new Date(isoDate);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };
  return (
    <div className="overflow-x-auto w-full mt-6">
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-primary text-white">
            <th className="p-3 text-left border border-gray-300">Date</th>
            <th className="p-3 text-left border border-gray-300">
              Description
            </th>
            <th className="p-3 text-right border border-gray-300">Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr
              key={index}
              className={`hover:bg-primary-dark/10 ${
                transaction.type === "OUTFLOW" ? "text-red-500" : "text-green-500"
              }`}
            >
              <td className="p-3 border border-gray-300">
              {transaction.value_date}
              </td>
              <td className="p-3 border border-gray-300">
                {transaction.description || "No description"}
              </td>
              <td className="p-3 border border-gray-300 text-right">
                ${transaction.amount.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;
