import "./checkout-item.styles.scss";
import { useContext } from "react";
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext/ShoppingCartContext";

export default function CheckOutItem({ item }) {
  const { removeItemFromCart, addItemToCart, decreaseQuantityofItem } =
    useContext(ShoppingCartContext);
  const removeItem = () => {
    removeItemFromCart(item);
  };
  const increaseQuantity = () => {
    addItemToCart(item);
  };
  const decreaseQuantity = () => {
    if (item.quantity > 1) {
      decreaseQuantityofItem(item);
    } else return;
  };
  const { name, price, quantity, imageUrl } = item;

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <span onClick={decreaseQuantity} className="arrow">&#10094;</span>
        <div className="value">{quantity}</div>
        <span onClick={increaseQuantity} className="arrow">&#10095;</span>
      </span>
      <span className="price">{price}</span>
      <div onClick={removeItem} className="remove-button">
        &#10005;
      </div>
    </div>
  );
}
