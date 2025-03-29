import { createContext, useState } from "react";

export const ModalContext = createContext({});

export const ModalContextProvider = ({children}) => {
  const [totalOrder, setTotalOrder] = useState(0);
  const [visible, setVisible] = useState(false);

  return (
    <ModalContext.Provider value={{totalOrder, setTotalOrder, visible, setVisible}}>
      {children}
    </ModalContext.Provider>
  )
}