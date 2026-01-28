import React, { useState } from "react";

export default function ChatBot() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "👋 Hi! Ask me about any government scheme." },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { from: "user", text: input };
    const botMsg = {
      from: "bot",
      text: "I'm still learning. Try using the search above for better results!",
    };
    setMessages([...messages, userMsg, botMsg]);
    setInput("");
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white border shadow-lg rounded-lg w-80 flex flex-col">
      <div className="bg-blue-600 text-white p-2 rounded-t-lg text-center font-semibold">
        Scheme Assistant 🤖
      </div>

      <div className="flex-1 p-2 overflow-y-auto h-64 text-sm">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`mb-2 ${
              m.from === "bot" ? "text-blue-700" : "text-gray-800 text-right"
            }`}
          >
            {m.text}
          </div>
        ))}
      </div>

      <div className="flex border-t p-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-grow border rounded-md px-2 py-1 text-sm"
        />
        <button
          onClick={handleSend}
          className="ml-2 bg-blue-600 text-white px-3 py-1 rounded-md text-sm"
        >
          Send
        </button>
      </div>
    </div>
  );
}
