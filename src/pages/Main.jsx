import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { CampaignsFilters, CampaignsTable } from '@containers';
import { campaignUtils } from '@utils';

const Main = () => {
  const [filteredCampaigns, setFilteredCampaigns] = useState([]);
  const { isLoading, campaigns } = useSelector((state) => state.campaigns);

  useEffect(() => {
    if (campaigns.length > 0) {
      setFilteredCampaigns(campaigns);
    }
  }, [campaigns]);

  return (
    <div>
      {isLoading ? (
        <div>LOADING...</div>
      ) : (
        <React.Fragment>
          <CampaignsFilters
            dateFilterHandler={(filterStart, filterEnd) => {
              const updatedList = campaignUtils.getByDate(
                filterStart,
                filterEnd
              )(campaigns);

              setFilteredCampaigns(updatedList);
            }}
            nameFilterHandler={(filter) => {
              const updatedList = campaignUtils.getByName(filter)(campaigns);

              setFilteredCampaigns(updatedList);
            }}
          />
          <CampaignsTable campaigns={filteredCampaigns} />
        </React.Fragment>
      )}
    </div>
  );
};

export default Main;
