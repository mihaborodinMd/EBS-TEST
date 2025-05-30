// Home.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import { Home } from "./Home";

// Мокаем useCart
jest.mock("../context/CartContext", () => ({
  useCart: () => ({
    cartItems: [],
    addToCart: jest.fn(),
    removeFromCart: jest.fn(),
    clearCart: jest.fn(),
    updateQuantity: jest.fn(),
    total: 0,
  }),
}));

describe("Home component", () => {
  test("renders and calls addToCart on button click", async () => {
    render(<Home />);

    // ⚠️ Этот шаг сработает только если есть хотя бы один product (можно замокать fetch)
    const addButton = await screen.findByText(/ADD TO CART/i);

    fireEvent.click(addButton);

    // Проверяем, был ли вызван addToCart
    const { useCart } = require("../context/CartContext");
    expect(useCart().addToCart).toHaveBeenCalled();
  });
});
