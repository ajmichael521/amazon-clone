import React, { createContext, useContext, useReducer } from "react";

//prepares the datalayer

export const StateContext = createContext();

//wrap our app and provide the datalayer to different componets

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
//pull information from the datalayers
export const useStateValue = () => useContext(StateContext);
