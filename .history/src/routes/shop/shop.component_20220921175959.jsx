import { useContext } from "react";

import { ProductsContext } from "../../contexts/products.context";
import ProductCard from "../../components/product-card/product-card.component";

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div>
      {products.map(({ id, name }) => (
        <ProductCard/>
      ))}
    </div>
  );
};

export default Shop;