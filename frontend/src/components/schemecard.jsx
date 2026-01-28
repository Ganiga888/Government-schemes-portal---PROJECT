import React from "react";

export default function SchemeCard({ scheme }) {
  return (
    <div className="bg-white border rounded-lg shadow-sm p-4 mb-3 hover:shadow-md transition">
      <h2 className="text-lg font-semibold text-blue-700">{scheme.title}</h2>
      <p className="text-gray-600 mt-1">{scheme.description}</p>
      <div className="text-sm mt-2 flex flex-wrap gap-3 text-gray-700">
        <span><strong>State:</strong> {scheme.state}</span>
        <span><strong>Category:</strong> {scheme.category}</span>
      </div>
      {scheme.applyUrl && (
        <a
          href={scheme.applyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 text-sm bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700"
        >
          Apply Now
        </a>
      )}
    </div>
  );
}
