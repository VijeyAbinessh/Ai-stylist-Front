import { useState } from "react";

import PersonalizeStyle from "../components/PersonalizeStyle";
import AIPreferences from "../components/AIPreferences";
import ChatHistory from "../components/ChatHistory";
import Cart from "../components/Cart";
import MediaUpload from "../components/MediaUpload";
import AIChat from "../components/AIChat";

export default function Dashboard() {
  const [active, setActive] = useState("chat");

  const [showLeft, setShowLeft] = useState(true);
  const [showRight, setShowRight] = useState(true);

  return (
    <div className="dashboard-container">
      {/* LEFT MENU */}
      <div className={`side-menu left ${showLeft ? "open" : "closed"}`}>
        <h3>☰ AI Stylist</h3>
        <p onClick={() => setActive("personalize")}>🎨 Personalize</p>
        <p onClick={() => setActive("ai")}>🧠 AI Preferences</p>
        <p onClick={() => setActive("chat")}>💬 Chat History</p>
      </div>

      {/* MAIN AREA */}
      <div className="dashboard-main">
        <div className="top-bar">
          <button onClick={() => setShowLeft(!showLeft)}>☰</button>
          <h1>Dashboard</h1>
          <button onClick={() => setShowRight(!showRight)}>👤</button>
        </div>

          <MediaUpload />
            {/* AI CHAT ALWAYS VISIBLE */}
  <AIChat />

        <div className="glass-panel">
          {active === "personalize" && <PersonalizeStyle />}
          {active === "ai" && <AIPreferences />}

          {active === "cart" && <Cart />}
        </div>
      </div>

      {/* RIGHT MENU */}
      <div className={`side-menu right ${showRight ? "open" : "closed"}`}>
        <h3>👤 Account</h3>
        <p onClick={() => setActive("cart")}>🛒 Cart</p>
        <p>📦 Orders</p>
        <p>🚚 Track Order</p>
        <p>⭐ Reviews</p>
      </div>
    </div>
  );
}
