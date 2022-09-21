import "./product-card.component.scss";
import Button from "../button/button.component";

const ProductCard = ({ product }) => {
  // destructure
  const { name, price, imgUrl } = product;

  return (
    <div className="product-card-container">
      <img src={imgUrl} alt={/>
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>

      <Button buttonType="inverted">Add to cart</Button>
    </div>
  );
};

export default ProductCard;
