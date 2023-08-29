import { useState, createContext, useEffect } from "react";
import SHOP_DATA from '../../data/shop-data.js'
import { addCollectionAndDocuments, getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
  categoriesMap: {}
});

export const CategoriesContextProvider = ({ children }) => {
  
  const [categoriesMap, setCategoriesMap] = useState({});
  useEffect(()=>{
    const getCategoriesMap = async ()=>{
     const categoryMap = await getCategoriesAndDocuments()
      setCategoriesMap(categoryMap)
    }
    getCategoriesMap()
  }, [])
  const value = {
    categoriesMap
  };
  return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>;
};
