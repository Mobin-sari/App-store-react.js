import { useParams } from "react-router-dom";
import { useProductsDetails } from "../context/ProductContext";

function DetailPage() {
  const { id } = useParams();
  const productDetails = useProductsDetails(+id);
  console.log(productDetails);
  return <div>detail page</div>;
}

export default DetailPage;
