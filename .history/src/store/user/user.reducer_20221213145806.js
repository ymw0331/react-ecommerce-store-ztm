import { USER_ACTION_TYPES } from "./user.types"

const INITIAL_STATE = {
  currentUser: null, // no user when initialised
  isLoading: false,
  error: null
};

// create a reducer function
export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action; // 2 possible prop of type and payload

  switch (type) {
    case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: payload,
      };

    case USER_ACTION_TYPES.SIGN_IN_FAILED:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};
