import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";
import SHOP_DATA from "../shop-data.js";

export const CategriesContext = createContext({
  categoriesMap: [],
});

export const CategriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  // do it once
  // useEffect(() => {
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  // }, []);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
    };
    getCategoriesMap();
  }, []);

  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider v lue={value}>
      {children}
    </ProductsContext.Provider>
  );
};
