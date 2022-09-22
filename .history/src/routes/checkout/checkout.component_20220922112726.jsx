import { useContext } from "react";
import { CartContext } from "../../contexts/cart.contexts";

import "./checkout.styles.scss";

const CheckOut = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <h1>I am the checkout page</h1>
    </div>
  );
};

export default CheckOut;
