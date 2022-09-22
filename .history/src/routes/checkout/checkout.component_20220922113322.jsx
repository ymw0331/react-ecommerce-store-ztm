import { useContext } from "react";
import { CartContext } from "../../contexts/cart.contexts";

import "./checkout.styles.scss";

const CheckOut = () => {
  const { cartItems , addItemToCart} = useContext(CartContext);

  return (
    <div>
      <h1>I am the checkout page</h1>
      <div>
        {cartItems.map((cartItem) => {
          const { id, name, quantity } = cartItem;
          return (
            <div key={id}>
              <h2>{name}</h2>
              <span>{quantity}</span>
              <span>decrement</span>
              <span onClick={addItemToCart()}>increment</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CheckOut;
