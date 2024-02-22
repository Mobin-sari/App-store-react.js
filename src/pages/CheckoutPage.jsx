import BasketCard from "../components/BasketCard";
import BasketSidebar from "../components/BasketSidebar";
import { useCart } from "../context/CartContext";

import styles from "../styles/checkoutPage.module.css"

function CheckoutPage() {
  const [state, dispatch] = useCart();

  const clickHandler = (type, payload) => {
    dispatch({ type, payload });
  };
  if (!state.itemCounter) {
    return (
      <div className={styles.container}>
        <p>Empty</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <BasketSidebar state={state} clickHandler={clickHandler} />
      <div className={styles.product}>
        {state.selectedItems.map((product) => (
          <BasketCard
            key={product.id}
            data={product}
            clickHandler={clickHandler}
          />
        ))}
      </div>
    </div>
  );
}

export default CheckoutPage;
