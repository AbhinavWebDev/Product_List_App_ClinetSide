const defaultState = require("../Store/state.json");
const categoryReducer = (state = defaultState, action) => {
  switch (action.type) {
    

    case "RETREIVING_START":
      return { ...state, error: false };
    case "RETREIVING_SUCCESS":
      return {
        ...state,
        category: action.data,
        error: false,
      };

    case "RETREIVING_FAIL":
      return { ...state, error: true };

    default:
      return state;
  }
};

export default categoryReducer;
