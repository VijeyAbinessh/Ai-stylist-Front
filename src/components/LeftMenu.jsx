export default function LeftMenu({ setActiveSection }) {
  return (
    <div className="left-menu">
      <h3>☰ AI Stylist</h3>
      <ul>
        <li onClick={() => setActiveSection("personalize")}>🎨 Personalize Style</li>
        <li onClick={() => setActiveSection("ai")}>🧠 AI Preferences</li>
        <li onClick={() => setActiveSection("chat")}>💬 Chat History</li>
        <li onClick={() => setActiveSection("insights")}>📊 Style Insights</li>
        <li onClick={() => setActiveSection("settings")}>⚙️ Settings</li>
      </ul>
    </div>
  );
}
