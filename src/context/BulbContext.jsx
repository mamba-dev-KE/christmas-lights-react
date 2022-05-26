import { createContext, useReducer, useEffect } from "react";
import { bulbReducer } from "../app/store";

export const BulbContext = createContext();

export const BulbContextProvider = ({ children }) => {
  const initialState = {
    isLightsOn: true,
    bulbs: [],
  };

  const [state, dispatch] = useReducer(bulbReducer, initialState);

  return (
    <BulbContext.Provider value={{ state, dispatch }}>
      {children}
    </BulbContext.Provider>
  );
};
