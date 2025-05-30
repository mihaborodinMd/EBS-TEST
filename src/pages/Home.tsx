import styles from "./Home.module.css";
import { useEffect, useState } from "react";
import type { Product } from "../types/Product";
import { useCart } from "../context/CartContext";

export const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | "none">("none");

  // Деструктурируем методы и cartItems из контекста
  const { addToCart, updateQuantity, cartItems } = useCart();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data: Product[]) => {
        setProducts(data);
        setFilteredProducts(data);

        const cats = Array.from(new Set(data.map((p) => p.category)));
        setCategories(cats);
      });
  }, []);

  useEffect(() => {
    let updated = [...products];

    if (selectedCategory !== "all") {
      updated = updated.filter((p) => p.category === selectedCategory);
    }

    if (sortOrder === "asc") {
      updated.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "desc") {
      updated.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(updated);
  }, [products, selectedCategory, sortOrder]);

  // Функция для получения количества товара в корзине
  const getQuantity = (productId: number) => {
    const item = cartItems.find((item) => item.id === productId);
    return item ? item.quantity : 0;
  };

  return (
    <div className={styles.container}>
      <div className={styles.filters}>
        <label className={styles.filterLabel}>
          Filter by category:
          <select
            className={styles.select}
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">All</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </label>

        <label className={styles.filterLabel}>
          Sort by price:
          <select
            className={styles.select}
            value={sortOrder}
            onChange={(e) =>
              setSortOrder(e.target.value as "asc" | "desc" | "none")
            }
          >
            <option value="none">None</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </label>
      </div>

      <div className={styles.productsGrid}>
        {filteredProducts.map((product) => {
          const quantity = getQuantity(product.id);

          return (
            <div key={product.id} className={styles.productCard}>
              <img
                src={product.image}
                alt={product.title}
                className={styles.productImage}
              />
              <h3 className={styles.productTitle}>{product.title}</h3>
              <p className={styles.productCategory}>{product.category}</p>
              <p className={styles.productPrice}>${product.price.toFixed(2)}</p>

              <div className={styles.cartControls}>
                {quantity > 0 ? (
                  <>
                    <button
                      onClick={() =>
                        updateQuantity(product.id, quantity - 1)
                      }
                      className={styles.controlButton}
                    >
                      -
                    </button>
                    <span className={styles.quantity}>{quantity}</span>
                    <button
                      onClick={() => addToCart(product)}
                      className={styles.controlButton}
                    >
                      +
                    </button>
                  </>
                ) : (
                  <button
                    className={styles.button}
                    onClick={() => addToCart(product)}
                  >
                    ADD TO CART
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};