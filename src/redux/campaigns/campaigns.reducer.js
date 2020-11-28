import * as types from './campaigns.types';

export const initialState = { isLoading: false, campaigns: [] };

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.BEFORE_GET_CAMPAIGNS:
      return {
        ...state,
        isLoading: true,
      };
    case types.ON_GET_CAMPAIGNS:
      return {
        ...state,
        error: null,
        isLoading: false,
        campaigns: payload.campaigns,
      };
    case types.AFTER_GET_CAMPAIGNS_ERROR:
      return {
        ...state,
        campaigns: [],
        isLoading: false,
        error: payload.error,
      };
    default:
      return state;
  }
};
