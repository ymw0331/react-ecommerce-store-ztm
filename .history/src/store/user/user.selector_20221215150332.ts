import { createSelector } from 'reselect';
import { UserState } from './user.reducer';

export const selectCurrentUser = (state): UserState => state.user;
