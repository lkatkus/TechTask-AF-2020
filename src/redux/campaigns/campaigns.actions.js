import { any, concat, map, prop, includes } from 'ramda';
import { toast } from 'react-toastify';

import { actions as usersActions } from '@redux/users';
import { campaignUtils } from '@utils';

import * as types from './campaigns.types';

const combineCampaigns = (existingCampaigns, newCampaigns, onError) => {
  const currentIds = map(prop('id'), existingCampaigns);
  const hasDublicates = any(({ id }) => includes(id, currentIds))(newCampaigns);

  if (hasDublicates) {
    onError('Dublicate campaign id found');

    return existingCampaigns;
  }

  return concat(existingCampaigns, newCampaigns);
};

const getCampaigns = ({ campaigns: campaignsToAdd }) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({ type: types.BEFORE_GET_CAMPAIGNS });

    if (!campaignsToAdd || campaignsToAdd.length === 0) {
      throw new Error('Please provide campaign data');
    }

    await dispatch(usersActions.getUsers());

    const {
      users,
      campaigns: { data: existingCampaigns },
    } = getState();

    const newCampaigns = campaignUtils.mapDataToStore(
      campaignsToAdd,
      users.data
    );

    const payload = {
      campaigns: combineCampaigns(existingCampaigns, newCampaigns, (error) => {
        toast(error, { type: 'error' });
      }),
    };

    dispatch({ type: types.ON_GET_CAMPAIGNS, payload });
  } catch (error) {
    toast(error.message, { type: 'error' });

    dispatch({
      type: types.AFTER_GET_CAMPAIGNS_ERROR,
      payload: {
        error: error.message,
      },
    });
  }
};

export default {
  getCampaigns,
};
