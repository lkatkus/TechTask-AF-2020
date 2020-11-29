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
            filterHandler={({ startDate, endDate, name } = {}) => {
              if (!startDate && !endDate && !name) {
                setFilteredCampaigns(campaigns);
              } else {
                let updatedList = campaigns;

                if (startDate || endDate) {
                  updatedList = campaignUtils.getByDate(
                    startDate,
                    endDate
                  )(updatedList);
                }

                if (name) {
                  updatedList = campaignUtils.getByName(name)(updatedList);
                }

                setFilteredCampaigns(updatedList);
              }
            }}
          />
          <CampaignsTable campaigns={filteredCampaigns} />
        </React.Fragment>
      )}
    </div>
  );
};

export default Main;
