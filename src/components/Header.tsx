import { Link } from "react-router-dom";

export const Header = () => (
  <header style={{ padding: '1rem', background: '#eee' }}>
    <nav>
      <Link to="/">Home</Link> | <Link to="/cart">Cart</Link>
    </nav>
  </header>
);
