import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/ShoppingCartContext/cart.context";
import { CartDropdownContainer, CartItems, EmptyMessage } from "./cart-dropdown.styles";

export default function CartDropdown() {
  const { cartItems } = useContext(ShoppingCartContext);
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your Cart is Empty</EmptyMessage>
        )}
      </CartItems>
      <Link to="checkout">
        <Button>Checkout</Button>
      </Link>
    </CartDropdownContainer>
  );
}
