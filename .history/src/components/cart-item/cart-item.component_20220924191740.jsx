import "./cart-item.styles.jsx"
import { CartItemContainer, Img, ItemDetail } from "./cart-item.styles.jsx";


const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CartItemContainer>
      <Img src={imageUrl} alt={`${name}`} />
      <ItemDetail>
        <span className="name">{name}</span>
        <span className="price">
          {quantity} X ${price}
        </span>
      </div>
    </CartItemContainer>
  );
};

export default CartItem;
