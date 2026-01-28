import React from "react";
import SchemeCard from "./SchemeCard";

export default function Recommender({ recs }) {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2 text-green-700">
        Recommended for You
      </h2>
      {recs.length === 0 ? (
        <p className="text-gray-500 text-sm">
          No recommendations yet. Click “Get Recommendations” to see matches.
        </p>
      ) : (
        recs.map((s) => <SchemeCard key={s._id} scheme={s} />)
      )}
    </div>
  );
}
