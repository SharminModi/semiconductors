import React, { useState } from "react";

export default function ChatBot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMsg = async () => {
    if (!input.trim()) return;

    setMessages(m => [...m, { sender: "user", text: input }]);

    const res = await fetch("http://localhost:8000/api/ai/rag", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: input })
    });

    const data = await res.json();

    setMessages(m => [...m, { sender: "bot", text: data.answer }]);

    setInput("");
  };

  return (
    <div style={{ position: "fixed", bottom: 0, right: 20, width: 300 }}>
      <div style={{
        background: "#fff",
        borderRadius: 10,
        padding: 15,
        maxHeight: 300,
        overflowY: "auto",
        boxShadow: "0 0 12px rgba(0,0,0,0.2)"
      }}>
        <h4>AI Chatbot</h4>

        {messages.map((m, i) => (
          <div key={i} style={{
            textAlign: m.sender === "user" ? "right" : "left",
            margin: "5px 0"
          }}>
            <span style={{
              display: "inline-block",
              padding: 8,
              borderRadius: 8,
              background: m.sender === "user" ? "#DCF8C6" : "#EEE"
            }}>
              {m.text}
            </span>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", marginTop: 6 }}>
        <input
          style={{ flex: 1, padding: 8 }}
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Ask something..."
        />
        <button onClick={sendMsg} style={{ padding: "8px 10px" }}>Send</button>
      </div>
    </div>
  );
}
