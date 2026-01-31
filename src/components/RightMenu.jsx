export default function RightMenu({ setActiveSection }) {
  return (
    <div className="right-menu">
      <h3>👤 Profile</h3>
      <ul>
        <li onClick={() => setActiveSection("profile")}>👤 Profile</li>
        <li onClick={() => setActiveSection("cart")}>🛒 Cart</li>
        <li onClick={() => setActiveSection("orders")}>📦 Orders Placed</li>
        <li onClick={() => setActiveSection("track")}>🚚 Track Order</li>
        <li onClick={() => setActiveSection("reviews")}>⭐ Your Reviews</li>
      </ul>
    </div>
  );
}
