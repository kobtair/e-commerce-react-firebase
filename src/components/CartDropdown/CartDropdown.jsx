import Button from "../Button/Button"
import './cart-dropdown.styles.scss'
import CartItem from "../CartItem/CartItem"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext/ShoppingCartContext"

export default function CartDropdown() {
  const {cartItems} = useContext(ShoppingCartContext)
  return (
    <div className='cart-dropdown-container'>
        <div className='cart-items' > 
        {cartItems.map(cartItem=><CartItem key={cartItem.id} cartItem={cartItem} />)}
        </div>
        <Link to="checkout">
        <Button >Checkout</Button>
        </Link>
        
    </div>
  )
}
