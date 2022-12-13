import { USER_ACTION_TYPES } from "./user.types"

const INITIAL_STATE = {
  currentUser: null, // no user when initialised
  isLoading: false,
  
};

// create a reducer function
export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action; // 2 possible prop of type and payload

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      return state;
  }
};
