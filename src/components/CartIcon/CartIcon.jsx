import { CartContext } from "../../contexts/ShoppingCartContext/cart.context";
import { useContext, useEffect, useState } from "react";
import {ShoppingIcon, CartIconConatiner, ItemCount} from './cart-icon.styles.jsx'

export default function CartIcon() {
    const {setCartIsOpen, cartIsOpen, cartItems} = useContext(CartContext)
    const [count, setCount] = useState(0)
    const getCartSize = ()=>{
      const newCount = cartItems.reduce(((total,item)=>total+item.quantity),0)
      setCount(newCount)
    }
    useEffect(()=>{
        getCartSize()
    },[cartItems])

  return (
    <CartIconConatiner onClick={()=>setCartIsOpen(!cartIsOpen)} >
      <ShoppingIcon className="shopping-icon" />
      <ItemCount >{count}</ItemCount>
    </CartIconConatiner>
  );
}
