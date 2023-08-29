import { useContext, useEffect, useState } from "react";
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext/ShoppingCartContext";
import "./checkout.styles.scss";
import CheckOutItem from "../../components/CheckoutItem/CheckOutItem";

export default function Checkout() {
  const { cartItems } = useContext(ShoppingCartContext);
  const [total, setTotal] = useState(0)
  const calculateTotal= ()=>{
    const newTotal= cartItems.reduce(((total,item)=>total+item.quantity*item.price), 0)
    setTotal(newTotal)
  }
  useEffect(()=>{
    calculateTotal()
  }, [cartItems])
  return (
  <div className="checkout-container">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>

    </div>
    {cartItems.map((item) => (
      <CheckOutItem key={item.id} item={item} />
    ))}
    <span className="total">Total: $ {total}</span>
  </div>
  );
}
