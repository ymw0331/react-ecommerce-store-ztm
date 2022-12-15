import { FC } from "react";
import { CartItemContainer, ItemDetails } from "./cart-item.styles";
import { CartItem as TCartItem } from '../../store/cart/cart.types';

import "./cart-item.styles";

const CartItem = ({ cartItem: CartI }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span className="name">{name}</span>
        <span className="price">
          {quantity} X ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
