import React from "react";
import BankList from "../components/banks/BankList";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      <h1 className="text-2xl font-bold text-gray-700 mb-6">Bank List</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <BankList />
      </div>
    </div>
  );
};

export default Dashboard;
