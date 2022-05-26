import { createContext, useReducer } from "react";
import { bulbReducer } from "../store/store";

export const BulbContext = createContext();

export const BulbContextProvider = ({ children }) => {
  const initialState = {
    isLightsOn: true,
    redLights: 0,
    blueLights: 0,
    greenLights: 0,
  };

  const [state, dispatch] = useReducer(bulbReducer, initialState);

  return (
    <BulbContext.Provider value={{ state, dispatch }}>
      {children}
    </BulbContext.Provider>
  );
};
