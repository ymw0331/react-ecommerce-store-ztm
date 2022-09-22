import { useContext } from "react";
import { CartContext } from "../../contexts/cart.contexts";

import "./checkout.styles.scss";

const CheckOut = () => {
  const { cartItems, addItemToCart } = useContext(CartContext);

  return (
    <div>
      <h1>I am the checkout page</h1>

      <div>
        {cartItems.map((cartItem) => {
          return <div></div><h2>{}</h2>
        })}
      </div>
    </div>
  );
};

export default CheckOut;
