import React from "react";

export default function SearchBar({ value, onChange, onSearch }) {
  return (
    <div className="flex gap-2 mb-4">
      <input
        type="text"
        className="border border-gray-300 rounded-md p-2 flex-grow"
        placeholder="Search government schemes..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <button
        onClick={onSearch}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Search
      </button>
    </div>
  );
}
