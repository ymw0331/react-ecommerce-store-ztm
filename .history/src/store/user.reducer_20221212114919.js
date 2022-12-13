
export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

const INITIAL_STATE = {
  currentUser: null, // no user when initialised
};

// create a reducer function
const userReducer = (state = INITIAL_STATE, action) => {
  console.log("dispatched");
  console.log(action);
  const { type, payload } = action; // 2 possible prop of type and payload

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
};
