import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bulbs: [],
  isLightsOn: true,
};

export const bulbSlice = createSlice({
  name: "bulbs",
  initialState,
  reducers: {
    toggleLights: (state) => {
      state.isLightsOn = !state.isLightsOn;
    },
    addBulb: (state, action) => {
      state.bulbs.push(action.payload);
    },
    removeBulb: (state, action) => {
      state.bulbs = state.bulbs.filter((bulb) => bulb.id !== action.payload);
    },
    toggleLightStatus: (state, action) => {
      state.bulbs = state.bulbs.map((bulb) => {
        if (bulb.id === action.payload) {
          bulb.isOn = !bulb.isOn;
        }
        return bulb;
      });
    },
    toggleBrokenStatus: (state, action) => {
      state.bulbs = state.bulbs.map((bulb) => {
        if (bulb.id === action.payload) {
          bulb.isBroken = !bulb.isBroken;
        }
        return bulb;
      });
    },
  },
});

export const {
  toggleLights,
  addBulb,
  removeBulb,
  toggleLightStatus,
  toggleBrokenStatus,
} = bulbSlice.actions;

export default bulbSlice.reducer;
