import {
  isAfter,
  isBefore,
  isEqual,
  isValid,
  startOfDay,
  endOfDay,
} from 'date-fns/fp';

const getTableData = (campaigns, config) => ({
  head: config,
  body: campaigns.map((campaign) => ({
    rowKey: campaign.id,
    rowData: config.map(({ key, component }) => ({
      colKey: `${campaign.id}-${campaign[key]}`,
      colData: campaign[key],
      ...(component && { component }),
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

const mapDataToStore = (campaigns = [], users = []) =>
  campaigns.map((campaign) => ({
    id: campaign.id,
    name: campaign.name,
    userId: campaign.userId,
    userName: getUserData(campaign.userId, users),
    startDate: campaign.startDate,
    endDate: campaign.endDate,
    isActive: isCampaignActive(
      new Date(campaign.startDate),
      new Date(campaign.endDate)
    ),
    budget: { amount: campaign.Budget, currency: 'USD' },
  }));

const isAfterOrEqual = (filterDate) => (date) =>
  isAfter(filterDate)(date) || isEqual(filterDate)(date);

const isBeforeOrEqual = (filterDate) => (date) =>
  isBefore(filterDate)(date) || isEqual(filterDate)(date);

const isInRange = (filterStart, filterEnd) => (startDate, endDate) =>
  isAfterOrEqual(filterStart)(startDate) && isBeforeOrEqual(filterEnd)(endDate);

const getByDate = (filterStart, filterEnd) => (campaigns) => {
  const filterStartDate = startOfDay(new Date(filterStart));
  const filterEndDate = endOfDay(new Date(filterEnd));

  return campaigns.filter(({ startDate, endDate }) => {
    if (filterStart && filterEnd) {
      return isInRange(filterStartDate, filterEndDate)(
        new Date(startDate),
        new Date(endDate)
      );
    }

    if (filterStart) {
      return isAfterOrEqual(filterStartDate)(new Date(startDate));
    }

    if (filterEnd) {
      return isBeforeOrEqual(filterEndDate)(new Date(endDate));
    }

    return true;
  });
};

const getByName = (filter) => (campaigns) => {
  if (filter) {
    return campaigns.filter(({ name }) => {
      if (name && typeof name === 'string') {
        return name.toLowerCase().includes(filter.toLowerCase());
      }

      return true;
    });
  }

  return campaigns;
};

const getInt = (modulo) => (number) => (number - (number % modulo)) / modulo;

const getFormattedBudget = (number) => {
  if (number % 1000000 !== number) {
    const a = getInt(1000000)(number);
    const b = getInt(100000)(number % 1000000);

    return `${a}.${b}M`;
  }
  if (number % 1000 !== number) {
    const a = getInt(1000)(number);
    const b = getInt(100)(number % 1000);

    return `${a}.${b}K`;
  }

  return number;
};

export default {
  getTableData,
  mapDataToStore,
  getByDate,
  getByName,
  getFormattedBudget,
};
