import { useContext, Fragment } from "react";


import { CategoriesContext } from "../../contexts/categories.context";
import "./shop.styles.scss";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        <Fragment>
          <h2>{title}s</h2>
          <div className="products-container">
            {categoriesMap.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Fragment>;
      })}
    </Fragment>
  );
};

export default Shop;
