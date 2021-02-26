import React, { createContext, useState, useContext } from "react";
 
const GlobalContext = createContext();
const { Provider } = GlobalContext;

export const useGlobalState = () => {
  const globalContext = useContext(GlobalContext)

  if(!globalContext) {
    throw new Error("Use useGlobalState hook inside GlobalProvider")
  }
  return globalContext
}

const GlobalProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [rtl, setRtl] = useState(false);

  return (
    <Provider
      value={{
          state: {
            rtl,
            count
          },
          action: {
            setCount,
            setRtl
          }
      }}
    >
      {children}
    </Provider>
  );
};

export { GlobalContext, GlobalProvider };