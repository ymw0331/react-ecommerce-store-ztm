import { createAction } from "../../reducer/reducer.utils";
import {USER}

const setCurrentUser = (user) => {
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
};
