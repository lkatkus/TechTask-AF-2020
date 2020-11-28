import { actions as usersActions } from '@redux/users';
import { mapCampaignData } from '@utils';

import * as types from './campaigns.types';

const getCampaigns = ({ campaigns }) => async (dispatch, getState) => {
  dispatch({ type: types.BEFORE_GET_CAMPAIGNS });

  if (!campaigns) {
    dispatch({
      type: types.AFTER_GET_CAMPAIGNS_ERROR,
      payload: {
        error: 'Something is missing...',
      },
    });

    return;
  }

  await dispatch(usersActions.getUsers());

  const { users } = getState();

  try {
    const payload = {
      campaigns: mapCampaignData(campaigns, users.data),
    };

    dispatch({ type: types.ON_GET_CAMPAIGNS, payload });
  } catch (error) {
    dispatch({
      type: types.AFTER_GET_CAMPAIGNS_ERROR,
      payload: {
        error: 'Failed to fetch campaigns',
      },
    });
  }
};

export default {
  getCampaigns,
};
