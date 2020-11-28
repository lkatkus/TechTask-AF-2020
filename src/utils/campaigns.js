import { isAfter, isBefore, isValid } from 'date-fns/fp';

export const getCampaignsTable = (
  campaigns,
  config
) => ({
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

const getUserData = (userId, users) => {
  const user = users.find(({ id }) => userId === id);

  return user ? user.name : 'Unknown User';
};

export const mapCampaignData = (campaigns, users) =>
  campaigns.map((campaign) => ({
    id: campaign.id,
    name: campaign.name,
    userId: getUserData(campaign.userId, users),
    startDate: campaign.startDate,
    endDate: campaign.endDate,
    isActive: isCampaignActive(
      new Date(campaign.startDate),
      new Date(campaign.endDate)
    ),
    budget: campaign.Budget,
  }));
