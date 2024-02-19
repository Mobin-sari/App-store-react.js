import { Link } from "react-router-dom";

import { CgDetailsMore } from "react-icons/cg";
import { TbShoppingBagCheck } from "react-icons/tb";
import { shortenText } from "../helper/helper";

import styles from "../styles/card.module.css";
import { useCart } from "../context/CartContext";

function Card({ data }) {
  const { id, title, image, price } = data;

  const [state, dispatch] = useCart();

  const clickHandler = () => {
    dispatch({ type: "add", payload: data });
  };

  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <h3>{shortenText(title)}</h3>
      <p>{price}</p>
      <div className={styles.actions}>
        <Link to={`/product/${id}`}>
          <CgDetailsMore />
        </Link>
        <button onClick={clickHandler}>
          <TbShoppingBagCheck />
        </button>
      </div>
    </div>
  );
}

export default Card;
