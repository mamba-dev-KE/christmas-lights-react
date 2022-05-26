// action creators
export const toggleLights = () => {
  return {
    type: "TOGGLE_LIGHTS",
  };
};

export const addBulb = (payload) => {
  return {
    type: "ADD_RED",
    payload,
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
    case "ADD_BULB":
      return {
        ...state,
        redLights: action.payload,
      };
    default:
      return state;
  }
};
