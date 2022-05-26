// action creators
export const toggleLights = () => {
  return {
    type: "TOGGLE_LIGHTS",
  };
};

export const addRedLights = (payload) => {
  return {
    type: "ADD_RED",
    payload,
  };
};
export const addBlueLights = (payload) => {
  return {
    type: "ADD_BLUE",
    payload,
  };
};
export const addGreenLights = (payload) => {
  return {
    type: "ADD_GREEN",
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
    case "ADD_RED":
      return {
        ...state,
        redLights: action.payload,
      };
    case "ADD_BLUE":
      return {
        ...state,
        blueLights: action.payload,
      };
    case "ADD_GREEN":
      return {
        ...state,
        greenLights: action.payload,
      };
    default:
      return state;
  }
};
