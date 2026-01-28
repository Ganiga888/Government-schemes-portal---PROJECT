import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import BrowseSchemes from "../pages/BrowseSchemes";
import Notifications from "../pages/Notifications";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SchemeDetail from "../pages/SchemeDetail"; // ✅ ADD THIS IMPORT

function AppRoutesInner() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <div className="min-h-[80vh]">
        {/* 👇 This key makes the component reload on navigation */}
        <Routes key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/browse" element={<BrowseSchemes />} />
          <Route path="/schemes/:id" element={<SchemeDetail />} /> {/* ✅ Correct */}
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default function AppRoutes() {
  return (
    <Router>
      <AppRoutesInner />
    </Router>
  );
}
