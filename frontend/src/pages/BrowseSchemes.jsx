import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function BrowseSchemes() {
  const { t, i18n } = useTranslation();

  const schemes = [
    {
      id: 1,
      name: "PM-Kisan",
      url: "https://pmkisan.gov.in/",
    },
    {
      id: 2,
      name: "Ayushman Bharat",
      url: "https://pmjay.gov.in/",
    },
    {
      id: 3,
      name: "Swachh Bharat Mission",
      url: "https://swachhbharatmission.gov.in/",
    },
    {
      id: 4,
      name: "Education Scheme",
      url: "https://scholarships.gov.in/",
    },
    {
      id: 5,
      name: "Healthcare Scheme",
      url: "https://www.nhp.gov.in/",
    },
    {
      id: 6,
      name: "Startup Support Scheme",
      url: "https://www.startupindia.gov.in/",
    },
  ];

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">{t("browse_schemes")}</h2>

        <select
          onChange={(e) => changeLanguage(e.target.value)}
          className="border rounded-lg p-1"
        >
          <option value="en">English</option>
          <option value="hi">हिन्दी</option>
          <option value="ta">தமிழ்</option>
          <option value="kn">ಕನ್ನಡ</option>
        </select>
      </div>

      {/* Schemes list */}
      <div className="space-y-3">
        {schemes.map((scheme) => (
          <div
            key={scheme.id}
            className="border rounded-lg p-4 hover:bg-blue-50 transition"
          >
            {/* Scheme name */}
            <h3 className="font-semibold text-lg mb-2 text-gray-800">
              {scheme.name}
            </h3>

            {/* Two buttons: View Details + Apply Now */}
            <div className="flex gap-4">
              {/* 🔵 Option 2: View Details */}
              <Link
                to={`/schemes/${scheme.id}`}
                className="bg-gray-100 border border-gray-300 text-gray-800 px-4 py-1 rounded-lg hover:bg-gray-200 transition"
              >
                View Details
              </Link>

              {/* 🟢 Option 1: Apply Now */}
              <button
                onClick={() => window.open(scheme.url, "_blank")}
                className="bg-blue-600 text-white px-4 py-1 rounded-lg hover:bg-blue-700 transition"
              >
                {t("apply_now")}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
