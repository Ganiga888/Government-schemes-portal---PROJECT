import React, { useEffect, useState } from "react";
import { AuthProvider } from "./context/AuthContext";
import AppRoutes from "./routes/AppRoutes";
import DarkModeToggle from "./components/DarkModeToggle";
import "./i18n";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  // 🌗 Apply dark class to entire app
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <AuthProvider>
      {/* 🔹 Wrapper MUST exist */}
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        
        {/* 🔹 Dark Mode Toggle */}
        <div className="p-4 flex justify-end">
          <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>

        {/* 🔹 App Pages */}
        <AppRoutes />
      </div>
    </AuthProvider>
  );
}
