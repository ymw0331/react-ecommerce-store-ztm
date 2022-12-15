import { createSelector } from "reselect";
import { UserState } from "./user.reducer";

export 
export const selectCurrentUser = (state) => state.user.currentUser;
