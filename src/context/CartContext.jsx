import { createContext, useState } from "react";

export const CartContext = createContext({});

export const CartContextProvider = ({children}) => {

  // estados de cada produto que vai ser usado para criar um dessertItem
  const [productsList, setProductList] = useState([]);

  return (
    <CartContext.Provider value={{productsList, setProductList}}>
      {children}
    </CartContext.Provider>
  )
}

