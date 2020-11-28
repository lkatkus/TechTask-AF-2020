import React from 'react';
import { useSelector } from 'react-redux';

import { CampaignsFilters, CampaignsTable } from '@containers';

const Main = () => {
  const { isLoading, campaigns } = useSelector((state) => state.campaigns);

  return (
    <div>
      {isLoading ? (
        <div>LOADING...</div>
      ) : (
        <React.Fragment>
          <CampaignsFilters />
          <CampaignsTable campaigns={campaigns} />
        </React.Fragment>
      )}
    </div>
  );
};

export default Main;
