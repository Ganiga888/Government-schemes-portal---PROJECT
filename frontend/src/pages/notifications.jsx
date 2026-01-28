import React from "react";
import { useNavigate } from "react-router-dom";

export default function Notifications() {
  const navigate = useNavigate();

  // Example notifications with linked scheme IDs
  const notifications = [
    {
      id: 1,
      message: "New scheme launched for students",
      schemeId: 4, // Education Scheme
    },
    {
      id: 2,
      message: "Your application status updated",
      schemeId: 6, // Startup Support Scheme
    },
  ];

  // When clicked, go to that scheme detail page
  const handleNotificationClick = (schemeId) => {
    navigate(`/schemes/${schemeId}`);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-blue-700">Notifications</h1>

      {notifications.length === 0 ? (
        <p className="text-gray-500">No new notifications.</p>
      ) : (
        <ul className="space-y-3">
          {notifications.map((n) => (
            <li
              key={n.id}
              onClick={() => handleNotificationClick(n.schemeId)}
              className="cursor-pointer p-4 border rounded-xl hover:bg-blue-50 transition"
            >
              <p className="text-gray-800">{n.message}</p>
              <p className="text-sm text-gray-500 mt-1">
                Click to view details
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
