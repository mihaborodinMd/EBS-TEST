import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { CartProvider } from "./context/CartContext";
function App() {
  return (
    <CartProvider>
    <Router>
      <header style={{ padding: "1rem", background: "#eee" }}>
        <nav style={{ display: "flex", gap: "1rem" }}>
          <Link to="/">Main</Link>
          <Link to="/cart">Cart</Link>
        </nav>
      </header>

      <main style={{ padding: "1rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>

      <footer style={{ textAlign: "center", padding: "1rem", background: "#eee" }}>
        <p>© 2025 My Store</p>
      </footer>
    </Router>
    </CartProvider>
  );
}

export default App;
