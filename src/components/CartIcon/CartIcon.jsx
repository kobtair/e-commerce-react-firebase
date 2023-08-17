import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext/ShoppingCartContext";
import { useContext } from "react";
import './cart-icon.styles.scss'

export default function CartIcon() {
    const {setCartIsOpen, cartIsOpen} = useContext(ShoppingCartContext)
  return (
    <div onClick={()=>setCartIsOpen(!cartIsOpen)} className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
}
