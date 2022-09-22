import { useContext } from "react";
import { CartContext } from "../../contexts/cart.contexts";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import "./checkout.styles.scss";

const CheckOut = () => {
  const { cartItems, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((cartItem) => {
        const { id, name, quantity } = cartItem;
        
        <CheckoutItem key={cartItem.id} cartItem={cartItem}
        
      })}
      <span className="Total">Total: 0</span>
    </div>
  );
};

export default CheckOut;
