// action creators
export const toggleLights = () => {
  return {
    type: "TOGGLE_LIGHTS",
  };
};

// reducers
export const bulbReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_LIGHTS":
      return {
        ...state,
        isLightsOn: !state.isLightsOn,
      };
    default:
      return state;
  }
};
