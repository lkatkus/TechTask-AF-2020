import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { CampaignsFilters, CampaignsTable } from '@containers';
import { PageWrapper } from '@components';
import { campaignUtils } from '@utils';

const Main = () => {
  const [filteredCampaigns, setFilteredCampaigns] = useState([]);
  const { isLoading, data: campaigns } = useSelector(
    (state) => state.campaigns
  );

  useEffect(() => {
    if (campaigns.length > 0) {
      setFilteredCampaigns(campaigns);
    }
  }, [campaigns]);

  return (
    <PageWrapper>
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
      <CampaignsTable isLoading={isLoading} campaigns={filteredCampaigns} />
    </PageWrapper>
  );
};

export default Main;
