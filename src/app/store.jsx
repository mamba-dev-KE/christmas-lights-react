import { configureStore } from "@reduxjs/toolkit";
import bulbReducer from "./bulbSlice";

export const store = configureStore({
  reducer: {
    bulbs: bulbReducer,
  },
});

// // action creators
// export const toggleLights = () => {
//   return {
//     type: "TOGGLE_LIGHTS",
//   };
// };

// export const addBulb = (payload) => {
//   return {
//     type: "ADD_BULB",
//     payload,
//   };
// };

// export const removeBulb = (payload) => {
//   return {
//     type: "REMOVE_BULB",
//     payload,
//   };
// };

// export const toggleLight = (payload) => {
//   return {
//     type: "TOGGLE_BULB_LIGHT",
//     payload,
//   };
// };

// // reducers
// export const bulbReducer = (state, action) => {
//   switch (action.type) {
//     case "TOGGLE_LIGHTS":
//       return {
//         ...state,
//         isLightsOn: !state.isLightsOn,
//       };
//     case "TOGGLE_BULB_LIGHT":
//       const bulbItem = state.bulbs.find((bulb) => bulb.id === action.payload);
//       return {
//         ...state,
//         bulbs: [...state.bulbs, { ...bulbItem, bulbItem.isOn = !bulbItem.isOn }],
//       };
//     case "ADD_BULB":
//       return {
//         ...state,
//         bulbs: [...state.bulbs, action.payload],
//       };
//     case "REMOVE_BULB":
//       return {
//         ...state,
//         bulbs: [...state.bulbs.filter((bulb) => bulb.id !== action.payload)],
//       };
//     default:
//       return state;
//   }
// };
