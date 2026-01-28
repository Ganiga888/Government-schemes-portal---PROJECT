import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <h1 className="text-4xl font-extrabold text-blue-800 mb-4">
          Welcome to Government Schemes Portal 🇮🇳
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
          Discover and apply for various welfare schemes provided by the
          Government of India. Empower yourself through education, healthcare,
          entrepreneurship, and more.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate("/browse")}
            className="bg-blue-700 text-white px-6 py-3 rounded-xl shadow-md hover:bg-blue-800 transition"
          >
            Browse Schemes
          </button>
          <button
            onClick={() => navigate("/notifications")}
            className="bg-green-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-green-700 transition"
          >
            View Notifications
          </button>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-12 bg-white">
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-10">
          Popular Schemes
        </h2>

        <div className="grid md:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto">
          {[
            {
              title: "PM-Kisan",
              desc: "Income support to small and marginal farmers.",
              color: "from-green-400 to-green-600",
            },
            {
              title: "Ayushman Bharat",
              desc: "Health coverage up to ₹5 lakh for families.",
              color: "from-yellow-400 to-yellow-600",
            },
            {
              title: "Startup Support Scheme",
              desc: "Encouraging innovation and entrepreneurship.",
              color: "from-blue-400 to-blue-700",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl shadow-md bg-gradient-to-r ${item.color} text-white hover:scale-105 transition`}
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm opacity-90">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Call-to-Action */}
      <section className="text-center py-16 bg-blue-50">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">
          Stay Updated with New Schemes
        </h2>
        <p className="text-gray-600 mb-6">
          Join the community and get notified whenever a new government scheme
          is launched.
        </p>
        <button
          onClick={() => navigate("/register")}
          className="bg-blue-700 text-white px-6 py-3 rounded-xl shadow-md hover:bg-blue-800 transition"
        >
          Register Now
        </button>
      </section>
    </div>
  );
}
