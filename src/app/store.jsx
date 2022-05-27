import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import bulbReducer from "./bulbSlice";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, bulbReducer);

export const store = configureStore({
  reducer: {
    bulbs: persistedReducer,
  },
  middleware: [thunk],
});
