// StateContext.js
import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(-1); // Example initial state

  return (
    <StateContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
