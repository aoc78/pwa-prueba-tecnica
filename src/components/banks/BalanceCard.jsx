import React from 'react';

const BalanceCard = ({ income, expense }) => {
  const balance = income - expense;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <h2 className="text-lg font-bold text-gray-700">Balance</h2>
      <p className="text-3xl font-bold mt-2">${balance.toFixed(2)}</p>
      <div className="flex justify-around mt-4">
        <div>
          <h3 className="text-sm text-gray-500">Income</h3>
          <p className="text-lg text-green-500 font-bold">${income.toFixed(2)}</p>
        </div>
        <div>
          <h3 className="text-sm text-gray-500">Expense</h3>
          <p className="text-lg text-red-500 font-bold">${expense.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default BalanceCard;
