import { createSelector } from "reselect";
import { UserState } from "./user.reducer";

export const selectCurrentUser = (state) => state.user.currentUser;
