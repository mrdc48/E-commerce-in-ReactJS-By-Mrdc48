import { createContext, useEffect, useState } from "react";
import { getDocumentAndCategories } from "../FirestoreForm/firebase.utils.js";
export const ProductsContext = createContext({
  products: {},
});
export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState({});
  const value = { products };
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getDocumentAndCategories();
      setProducts(categoryMap);
    };
    getCategoriesMap();
  }, []);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
// export default ProductsProvider;
