import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../components/searchbar";
import SchemeCard from "../components/schemecard";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

export default function Browse() {
  const [query, setQuery] = useState("");
  const [schemes, setSchemes] = useState([]);

  const fetchSchemes = async () => {
    const res = await axios.get(`${API}/api/schemes`, { params: { q: query } });
    setSchemes(res.data);
  };

  useEffect(() => { fetchSchemes(); }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-blue-700">Browse Schemes</h2>
      <SearchBar value={query} onChange={setQuery} onSearch={fetchSchemes} />
      {schemes.length === 0 ? (
        <p className="text-gray-500">No schemes found.</p>
      ) : (
        schemes.map((s) => <SchemeCard key={s._id} scheme={s} />)
      )}
    </div>
  );
}
