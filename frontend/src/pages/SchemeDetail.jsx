import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function SchemeDetail() {
  const { id } = useParams();
  const [scheme, setScheme] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Fetching scheme with ID:", id);
    fetch(`http://localhost:5000/api/schemes/${id}`)
      .then(res => {
        console.log("Response status:", res.status);
        if (!res.ok) throw new Error("Failed to fetch scheme");
        return res.json();
      })
      .then(data => {
        console.log("Fetched data:", data);
        setScheme(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Fetch error:", err);
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="p-6 text-gray-600">Loading scheme details...</div>;
  if (error) return <div className="p-6 text-red-500">Error: {error}</div>;
  if (!scheme) return <div className="p-6 text-gray-600">No scheme found.</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-2xl shadow-md">
      <h1 className="text-3xl font-bold mb-4 text-blue-700">{scheme.name}</h1>
      <p className="text-gray-700 mb-2"><strong>Category:</strong> {scheme.category}</p>
      <p className="text-gray-700 mb-2"><strong>Description:</strong> {scheme.description}</p>
      <p className="text-gray-700 mb-2"><strong>Eligibility:</strong> {scheme.eligibility}</p>
      <p className="text-gray-700 mb-4"><strong>Benefits:</strong> {scheme.benefits}</p>
      <a href="/browse" className="text-blue-600 hover:underline mt-4 inline-block">
        ← Back to all schemes
      </a>
    </div>
  );
}
