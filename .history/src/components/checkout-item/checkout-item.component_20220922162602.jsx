import { useContext } from "react";
import { CartContext } from "../../contexts/cart.contexts";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { clearItemFromCart } = useContext(CartContext);

    const clearItemHandler = () =>{
        clear
    }

  return (
    <div className="checkout-item-container">
      <div className="image-contaier">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="remove-button">&#10005;</div>
    </div>
  );
};

export default CheckoutItem;
