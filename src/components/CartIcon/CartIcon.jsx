import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext/ShoppingCartContext";
import { useContext, useEffect, useState } from "react";
import './cart-icon.styles.scss'

export default function CartIcon() {
    const {setCartIsOpen, cartIsOpen, cartItems} = useContext(ShoppingCartContext)
    const [count, setCount] = useState(0)
    const getCartSize = ()=>{
      const newCount = cartItems.reduce(((total,item)=>total+item.quantity),0)
      setCount(newCount)
    }
    useEffect(()=>{
        getCartSize()
    },[cartItems])

  return (
    <div onClick={()=>setCartIsOpen(!cartIsOpen)} className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{count}</span>
    </div>
  );
}
