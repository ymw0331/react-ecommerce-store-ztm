import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className="checkout-item-container">
      <div className="image-contaier">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name"></span>
      <span></span>
      <span></span>
      <div className="remove-button">&#1005</div>
    </div>
  );
};

export default CheckoutItem;