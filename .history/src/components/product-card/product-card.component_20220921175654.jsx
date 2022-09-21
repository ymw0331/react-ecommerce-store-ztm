import "./product-card.component.scss";
import Button from "../button/button.component";

const ProductCard = () => {
  return (
    <div className="product-card-container">
      <img />
      <div className="footer">
        <span className="name"></span>
        <span className="price"></span>

      </div>
    </div>
  );
};

export default ProductCard;
