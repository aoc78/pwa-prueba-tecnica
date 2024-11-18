import React, { useState } from "react";
import Signup from "../components/auth/signup";
import Login from "../components/auth/login";

const Home = () => {
  const [activeTab, setActiveTab] = useState("login"); // Tab activo

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      {/* Tabs */}
      <div className="flex w-full max-w-md justify-center mb-6">
        <button
          className={`w-1/2 p-3 ${
            activeTab === "login"
              ? "border-b-4 border-primary text-primary"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("login")}
        >
          Login
        </button>
        <button
          className={`w-1/2 p-3 ${
            activeTab === "signup"
              ? "border-b-4 border-primary text-primary"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("signup")}
        >
          Signup
        </button>
      </div>

      {/* Content */}
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        {activeTab === "login" ? <Login /> : <Signup />}
      </div>
    </div>
  );
};

export default Home;
