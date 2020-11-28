import { combineReducers } from 'redux';

import {
  initialState as initialCampaigns,
  reducer as campaignsReducer,
} from './campaigns';
import { initialState as initialUsers, reducer as usersReducer } from './users';

export const initialRootState = {
  campaigns: initialCampaigns,
  users: initialUsers,
};

const appReducer = combineReducers({
  campaigns: campaignsReducer,
  users: usersReducer,
});

export const rootReducer = (state, action) => appReducer(state, action);
