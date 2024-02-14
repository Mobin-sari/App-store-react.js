import { Link } from "react-router-dom";

import { CgDetailsMore } from "react-icons/cg";
import { TbShoppingBagCheck } from "react-icons/tb";
import { shortenText } from "../helper/helper";
function Card({ data }) {
  const { id, title, image, price } = data;

  return (
    <div>
      <img src={image} alt={title} />
      <h3>{shortenText(title)}</h3>
      <p>{price}</p>
      <div>
        <Link to={`/product/${id}`}>
          <CgDetailsMore />
        </Link>
        <button>
          <TbShoppingBagCheck />
        </button>
      </div>
    </div>
  );
}

export default Card;
