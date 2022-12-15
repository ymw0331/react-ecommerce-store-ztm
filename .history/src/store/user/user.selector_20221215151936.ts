import { createSelector } from 'reselect';
import { UserState } from './user.reducer';
import { RootState } from '../store';

export const selectUserReducer = (state: RootState): UserState => state.;

export const selectCurrentUser = createSelector(
  selectUserReducer,
  (user) => user.currentUser
);
