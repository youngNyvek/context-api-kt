import React, { createContext, useContext, useState } from "react";

export const BuyContext = createContext();

export default function BuyProvider({ children }) {
  const [selectedItens, setSelectedItens] = useState([]);

  return (
    <BuyContext.Provider
      value={{
        selectedItens,
        setSelectedItens,
        selectedItensCount: selectedItens.length,
      }}
    >
      {children}
    </BuyContext.Provider>
  );
}

export const useBuyContext = () => {
  const { selectedItens, selectedItensCount, setSelectedItens } =
    useContext(BuyContext);
  return { selectedItens, selectedItensCount, setSelectedItens };
};
