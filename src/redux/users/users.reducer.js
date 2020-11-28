import * as types from './users.types';

export const initialState = { isLoading: false, data: [] };

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.BEFORE_GET_USERS:
      return {
        ...state,
        isLoading: true,
      };
    case types.ON_GET_USERS:
      return {
        ...state,
        error: null,
        isLoading: false,
        data: payload.users,
      };
    case types.AFTER_GET_USERS_ERROR:
      return {
        ...state,
        data: [],
        isLoading: false,
        error: payload.error,
      };
    default:
      return state;
  }
};
