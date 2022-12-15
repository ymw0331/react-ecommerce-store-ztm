import { AnyAction } from 'redux';

export type ActionWithPayload<T,P



export const createAction = (type, payload) => ({ type, payload });
