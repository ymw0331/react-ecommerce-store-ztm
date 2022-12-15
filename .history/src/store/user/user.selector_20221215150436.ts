import { createSelector } from "reselect";
import { UserState } from "./user.reducer"

export const selectUserReducer =(state) 


export const selectCurrentUser = (state):UserState => state.user.currentUser;
