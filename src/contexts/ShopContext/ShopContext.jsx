import { useState, createContext } from "react";
import PRODUCTS from '../../data/shop-data.json'

export const ShopContext = createContext({
  
});

export const ShopContextProvider = ({ children }) => {
  
  const [products, setProducts] = useState(PRODUCTS);
  const value = {
    products
  };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
