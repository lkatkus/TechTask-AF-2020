import { isAfter, isBefore, isValid } from 'date-fns/fp';

export const getCampaignsTable = (campaigns, config) => ({
  head: config,
  body: campaigns.map((campaign) => ({
    rowKey: campaign.id,
    rowData: config.map(({ key, component }) => ({
      colKey: '',
      colData: campaign[key],
      component,
    })),
  })),
});

const isCampaignActive = (startDate, endDate) => {
  if (!isValid(startDate) || !isValid(endDate)) {
    return false;
  }

  const now = new Date();

  return isAfter(startDate)(now) && isBefore(endDate)(now);
};

export const mapCampaignData = (campaigns) =>
  campaigns.map((campaign) => ({
    id: campaign.id,
    name: campaign.name,
    userId: campaign.userId,
    startDate: campaign.startDate,
    endDate: campaign.endDate,
    isActive: isCampaignActive(
      new Date(campaign.startDate),
      new Date(campaign.endDate)
    ),
    budget: campaign.Budget,
  }));
