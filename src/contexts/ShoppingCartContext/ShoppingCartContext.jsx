import { useState, createContext } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const getProduct = cartItems.find((item) => item.id === productToAdd.id);
  if (getProduct) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  } else {
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  }
};

const removeCartItem = (cartItems, productToRemove) => {
  const getProduct = cartItems.find((item) => item.id === productToRemove.id);
  if (getProduct) {
    return cartItems.filter((item) => item !== getProduct);
  } else {
    return;
  }
};
const decrementQuantity = (cartItems, productToDecrease) => {
  const getProduct = cartItems.find((item) => item.id === productToDecrease.id);
  if (getProduct) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToDecrease.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  } else {
    return;
  }
};


export const ShoppingCartContext = createContext({
  cartIsOpen: false,
  setCartIsOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  decreaseQuantityofItem: ()=>{}
});

export const ShoppingCartContextProvider = ({ children }) => {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };
  const decreaseQuantityofItem = (productToDecrease)=>{
      setCartItems(decrementQuantity(cartItems, productToDecrease))
  }

  const value = {
    cartIsOpen,
    setCartIsOpen,
    cartItems,
    addItemToCart,
    removeItemFromCart,
    decreaseQuantityofItem
  };
  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
