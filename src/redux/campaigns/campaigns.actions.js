import * as types from './campaigns.types';

const getCampaigns = ({ campaigns }) => (dispatch) => {
  if (!campaigns) {
    dispatch({
      type: types.AFTER_GET_CAMPAIGNS_ERROR,
      payload: {
        error: 'Something is missing...',
      },
    });

    return;
  }

  dispatch({ type: types.BEFORE_GET_CAMPAIGNS });

  try {
    const payload = {
      campaigns,
    };

    dispatch({ type: types.ON_GET_CAMPAIGNS, payload });
  } catch (error) {
    dispatch({ type: types.AFTER_GET_CAMPAIGNS_ERROR });
  }
};

export default {
  getCampaigns,
};
