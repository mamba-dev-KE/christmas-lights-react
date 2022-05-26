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

export const removeBulb = (payload) => {
  return {
    type: "REMOVE_BULB",
    payload,
  };
};

export const toggleLight = (payload) => {
  return {
    type: "TOGGLE_BULB_LIGHT",
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
    case "TOGGLE_BULB_LIGHT":
      console.log(action.payload);
      return {
        ...state,
        yoh: [...state.bulbs],
      };
    case "ADD_BULB":
      return {
        ...state,
        bulbs: [...state.bulbs, action.payload],
      };
    case "REMOVE_BULB":
      return {
        ...state,
        bulbs: [...state.bulbs.filter((bulb) => bulb.id !== action.payload)],
      };
    default:
      return state;
  }
};
