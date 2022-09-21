import "./cart-item.styles.scss";

const CartItem = ({cartItem}) => {
    const {name} = cart


    return (
    <div>
      <h2>{name}</h2>
    </div>
  );
};

export default CartItem;
