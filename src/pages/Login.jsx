import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="login-page">
      <div className="login-box">
        <h1>✨ AI Stylist</h1>
        <p>Your personal fashion intelligence</p>

        <input placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button onClick={() => navigate("/landing")}>
          Enter →
        </button>
      </div>
    </div>
  );
}
