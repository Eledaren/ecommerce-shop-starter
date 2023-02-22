import React, {createContext, useState, useEffect} from 'react';

//create context
export const CartContext = createContext()

const CartProvider = ({children}) => {
  //cart state
  const [cart, setCart] = useState([])
  const addToCart = () => {
    console.log('added to the cart')
  }
  return (
    <CartContext.Provider value={{addToCart}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
