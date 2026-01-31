import { useEffect, useRef, useState } from "react";

const STORAGE_KEY = "ai_stylist_chat";

const defaultMessages = [
  {
    from: "ai",
    text: "Hi 👋 I’m your AI Stylist. How can I help you today?",
  },
];

export default function AIChat() {
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : defaultMessages;
  });

  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const endRef = useRef(null);

  // auto-scroll
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  // persist chat
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { from: "user", text: input };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      setTyping(false);
      setMessages((m) => [
        ...m,
        {
          from: "ai",
          text:
            "✨ I’m curating outfit ideas based on your request. Give me a second!",
        },
      ]);
    }, 1500);
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((m, i) => (
          <div key={i} className={`bubble ${m.from}`}>
            {m.text}
          </div>
        ))}

        {typing && <div className="bubble ai typing">AI is typing…</div>}
        <div ref={endRef} />
      </div>

      <div className="chat-input">
        <input
          placeholder="Ask your AI stylist…"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>➤</button>
      </div>
    </div>
  );
}
