import { usersAPI } from '@data';
import { mapCampaignData } from '@utils';

import * as types from './campaigns.types';

const getCampaigns = ({ campaigns }) => async (dispatch) => {
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

  // @todo move to user store
  const userData = await usersAPI.getUsersData();

  // To get some time for loading state
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });

  try {
    const payload = {
      campaigns: mapCampaignData(campaigns, userData),
    };

    dispatch({ type: types.ON_GET_CAMPAIGNS, payload });
  } catch (error) {
    dispatch({ type: types.AFTER_GET_CAMPAIGNS_ERROR });
  }
};

export default {
  getCampaigns,
};
