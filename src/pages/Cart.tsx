import { useCart } from "../context/CartContext";
import styles from "./Cart.module.css";

export const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();

  // Считаем общую цену
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className={styles.container}>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          <table className={styles.cartTable}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map(({ id, title, category, price, quantity }) => (
  <tr key={id}>
    <td>{title}</td>
    <td>{category}</td>
    <td>${price.toFixed(2)}</td>
    <td>
      <input
        type="number"
        min={1}
        value={quantity}
        onChange={(e) =>
          updateQuantity(id, Number(e.target.value))
        }
        className={styles.quantityInput}
      />
    </td>
    <td>
      <button
        className={styles.removeButton}
        onClick={() => removeFromCart(id)}
      >
        Delete
      </button>
    </td>
  </tr>
))}

            </tbody>
          </table>
          <div className={styles.total}>
            <strong>Total: ${totalPrice.toFixed(2)}</strong>
            <button className={styles.clearButton} onClick={clearCart}>
            Clear Cart
          </button>
          </div>
        </>
      )}
    </div>
  );
};
