import { Link } from "react-router-dom";

import { PiShoppingCartSimpleBold } from "react-icons/pi";

import { useCart } from "../context/CartContext";

import styles from "../styles/layout.module.css";

function Layout({ children }) {
  const [state] = useCart();

  return (
    <>
      <header className={styles.header}>
        <Link to="/products" className={styles.link}>Shop</Link>
        <Link to="/checkout">
          <div>
            <PiShoppingCartSimpleBold />
            {!!state.itemCounter && <span>{state.itemCounter}</span>}
          </div>
        </Link>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed by Mobin</p>
      </footer>
    </>
  );
}

export default Layout;
