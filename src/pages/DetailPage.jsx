import { Link, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { useProductsDetails } from "../context/ProductContext";
import { IoMdPricetag } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";

import styles from "../styles/detailPage.module.css";

function DetailPage() {
  const { id } = useParams();
  const productDetails = useProductsDetails(+id);
  if (!productDetails) return <Loader />;
  return (
    <div className={styles.container}>
      <img src={productDetails.image} alt={productDetails.title} />
      <div className={styles.information}>
        <h3 className={styles.title}>{productDetails.title}</h3>
        <p className={styles.description}>{productDetails.description}</p>
        <p className={styles.category}>{productDetails.category}</p>
        <div>
          <span className={styles.price}>
            <IoMdPricetag />
            {productDetails.price} $
          </span>
          <Link to="/products">
            <FaArrowLeft />
            <span>Back to shop</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
