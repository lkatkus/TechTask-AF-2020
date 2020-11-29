import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Main } from '@pages';
import { actions as campaignsActions } from '@redux/campaigns';

const INITIAL_CAMPAIGNS = [
  {
    id: 1,
    name: 'Divavu',
    startDate: '9/19/2017',
    endDate: '3/9/2018',
    Budget: 88377,
    userId: 3,
  },
  {
    id: 2,
    name: 'Jaxspan',
    startDate: '11/21/2019',
    endDate: '2/21/2020',
    Budget: 608715,
    userId: 6,
  },
  {
    id: 3,
    name: 'Miboo',
    startDate: '11/1/2020',
    endDate: '6/20/2021',
    Budget: 239507,
    userId: 7,
  },
  {
    id: 4,
    name: 'Trilith',
    startDate: '8/25/2017',
    endDate: '11/30/2022',
    Budget: 179838,
    userId: 1,
  },
  {
    id: 5,
    name: 'Layo',
    startDate: '11/28/2025',
    endDate: '3/10/2030',
    Budget: 837850,
    userId: 9,
  },
];

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // eslint-disable-next-line
    console.log('Available methods:', 'AddCampaigns', 'GetSomeCampaigns');
  }, []);

  // Adds global AddCampaigns
  useEffect(() => {
    window.AddCampaigns = (newCampaigns) => {
      dispatch(campaignsActions.getCampaigns({ campaigns: newCampaigns }));
    };
    window.GetSomeCampaigns = () => {
      dispatch(campaignsActions.getCampaigns({ campaigns: INITIAL_CAMPAIGNS }));
    };
  }, [dispatch]);

  return <Main />;
};

export default App;
