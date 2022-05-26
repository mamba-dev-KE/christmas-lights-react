// action creators
export const toggleLights = () => {
  return {
    type: "TOGGLE_LIGHTS",
  };
};

export const addBulb = (payload) => {
  return {
    type: "ADD_BULB",
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
        bulbs: [...state.bulbs, action.payload],
      };
    default:
      return state;
  }
};
