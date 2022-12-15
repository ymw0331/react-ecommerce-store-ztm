import { createSelector } from "reselect";
import { UserState } from "./user.reducer"

export const selectUserReducer =(state) : UserState


export const selectCurrentUser = (state):UserState => state.user.currentUser;
