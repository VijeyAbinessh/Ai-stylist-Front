import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <h1>Good Morning ☀️</h1>
      <h2>Your AI Stylist is ready</h2>

      <input
        className="prompt-input"
        placeholder="Tell me what you're looking for..."
      />

      <div className="chips">
        <span>Find me a summer outfit</span>
        <span>Minimal office wear</span>
        <span>Wedding guest look</span>
        <span>Luxury streetwear</span>
        <span>Outfit under ₹5,000</span>
      </div>

      <button className="dashboard-btn" onClick={() => navigate("/dashboard")}>
        Go to Dashboard ↓
      </button>
    </div>
  );
}
