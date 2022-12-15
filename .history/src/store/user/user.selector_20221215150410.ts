import { createSelector } from 'reselect';
import { UserState } from './user.reducer';

export const selectCurrentUser = (state: { user: UserState }): UserState =>
  state.user;

  export const selectCurre