import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial State
const initialState = {
  stocks: [],
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  const removeStock = (id) => {
    dispatch({
      type: "REMOVE_STOCK",
      payload: id,
    });
  };

  const addStock = (stock) => {
    dispatch({
      type: "ADD_STOCK",
      payload: stock,
    });
  };

  const editStock = (stock) => {
    dispatch({
      type: "EDIT_STOCK",
      payload: stock,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        stocks: state.stocks,
        removeStock,
        addStock,
        editStock,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
