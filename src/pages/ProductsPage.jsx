import Card from "../components/Card";
import { useProducts } from "../context/ProductContext";

// import styles from "../styles/productPage.module.css";

function ProductsPage() {
  const products = useProducts();
  return (
    <div>
      <div>
        {!products.length && <p>loading ...</p>}
        pages
        {products.map((p) => (
          <Card key={p.id} data={p} />
        ))}
      </div>
      <div>sidebar</div>
    </div>
  );
}

export default ProductsPage;
