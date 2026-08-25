import React, { useState } from "react";
import "./Chat.css";
import { askBot } from "./gemini";
import aiLogo from "../../Assest/ailogo.jpg";
function ChatWindow() {
  const [open, setOpen] = useState(false);
//   const [open, setOpen] = useState(false);
const [message, setMessage] = useState("");
const [messages, setMessages] = useState([
  {
    sender: "bot",
    text: "👋 Hello! I'm Prasanna's AI Assistant.",
  },
]);
const handleSend = async () => {
  if (!message.trim()) return;

  const userText = message;

  // Add user message
  setMessages((prev) => [
    ...prev,
    {
      sender: "user",
      text: userText,
    },
  ]);

  setMessage("");

  // Ask Gemini
  const reply = await askBot(userText);

  // Add AI reply
  setMessages((prev) => [
    ...prev,
    {
      sender: "bot",
      text: reply,
    },
  ]);
};

  return (
    
    <>
      {/* Floating Button */}
      <button
        className="chat-button"
        onClick={() => setOpen(!open)}
      >
     🤖
      </button>

      {/* Chat Window */}
      {open && (
        <div className="chat-box">

          <div className="chat-header">
            <h5>Ask Prasanna AI</h5>

            <button
              className="close-btn"
              onClick={() => setOpen(false)}
            >
              ✖
            </button>
          </div>

         <div className="chat-body">
  {messages.map((msg, index) => (
    <div
      key={index}
      className={
        msg.sender === "user"
          ? "user-message"
          : "bot-message"
      }
    >
      {msg.text}
    </div>
  ))}
</div>

          <div className="chat-footer">
<input
    value={message}
    onChange={(e)=>setMessage(e.target.value)}
    placeholder="Ask about Prasanna..."
/>
           <button onClick={handleSend}>
    Send
</button>
          </div>

        </div>
      )}
    </>
  );
}

export default ChatWindow;