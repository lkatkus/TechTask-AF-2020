import { combineReducers } from 'redux';

import {
  initialState as initialCampaigns,
  reducer as campaignsReducer,
} from './campaigns';

export const initialRootState = {
  campaigns: initialCampaigns,
};

const appReducer = combineReducers({
  campaigns: campaignsReducer,
});

export const rootReducer = (state, action) => appReducer(state, action);
