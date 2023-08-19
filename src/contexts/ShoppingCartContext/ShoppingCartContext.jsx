import { useState,createContext } from "react"

const addCartItem=(cartItems, productToAdd)=>{
  const getProduct= cartItems.find((item)=>(item.id === productToAdd.id)
  )
 if (getProduct){
  return cartItems.map(cartItem=>cartItem.id===productToAdd.id? {...cartItem, quantity: cartItem.quantity+1}: cartItem)
 }
 else{
  return([...cartItems, {...productToAdd, quantity:1}])
 }
  
}

export const ShoppingCartContext = createContext({
    cartIsOpen: false,
    setCartIsOpen: ()=>{},
    cartItems: [],
    addItemToCart: ()=>{}

    
  })



export const ShoppingCartContextProvider = ({children}) => {

    const [cartIsOpen, setCartIsOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const addItemToCart = (productToAdd)=>{
      setCartItems(addCartItem(cartItems,productToAdd))
      

    }

    const value = {
        cartIsOpen,
        setCartIsOpen,
        cartItems,
        addItemToCart
    }
  return (
    <ShoppingCartContext.Provider value={value}>{children}</ShoppingCartContext.Provider>
  )
}
