import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { actions as campaignsActions } from './redux/campaigns';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.AddCampaigns = (newCampaigns) => {
      dispatch(campaignsActions.getCampaigns({ campaigns: newCampaigns }));
    };
  }, [dispatch]);

  return <div>App</div>;
};

export default App;
