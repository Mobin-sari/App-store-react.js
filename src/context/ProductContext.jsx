import { createContext, useContext, useEffect, useState } from "react";

import api from "../services/confige";

const ProductContext = createContext();

function ProductProvider({ children }) {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setProduct(await api.get("/products"));
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchProduct();
  }, []);
  
  return (
    <ProductContext.Provider value={product}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;

const useProducts = () => {
  const products = useContext(ProductContext);
  return products;
};
export { useProducts };
