import { useState,createContext } from "react"

export const ShoppingCartContext = createContext({
    cartIsOpen: false,
    setCartIsOpen: ()=>{},
    setCartItems: ()=>{},
    cartItems: []

    
  })



export const ShoppingCartContextProvider = ({children}) => {

    const [cartIsOpen, setCartIsOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])

    const value = {
        cartIsOpen,
        setCartIsOpen,
        cartItems,
        setCartItems
    }
  return (
    <ShoppingCartContext.Provider value={value}>{children}</ShoppingCartContext.Provider>
  )
}
