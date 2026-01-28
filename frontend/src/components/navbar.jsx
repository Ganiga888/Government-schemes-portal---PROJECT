import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <div className="font-bold text-xl">
        <Link to="/">GovSchemes</Link>
      </div>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/browse">Browse</Link>
        {user && <Link to="/profile">Profile</Link>}
        <Link to="/notifications">Notifications</Link>
        {user ? (
          <button onClick={logout} className="bg-red-500 px-3 py-1 rounded">
            Logout
          </button>
        ) : (
          <Link to="/login" className="bg-green-500 px-3 py-1 rounded">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
