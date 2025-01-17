import React from 'react';

import { Table } from '@components';
import { campaignUtils } from '@utils';

import { ActivityIndicator } from './components';

const CAMPAIGNS_TABLE_CONFIG = [
  { label: 'Name', key: 'name' },
  { label: 'User Name', key: 'userName' },
  { label: 'Start Date', key: 'startDate' },
  { label: 'End Date', key: 'endDate' },
  {
    label: 'Active',
    key: 'isActive',
    component: (value) => <ActivityIndicator isActive={value} />,
  },
  {
    label: 'Budget',
    key: 'budget',
    component: (value) =>
      `${campaignUtils.getFormattedBudget(value.amount)} ${value.currency}`,
  },
];

const CampaignsTable = ({ isLoading, campaigns }) => (
  <div>
    <Table
      isLoading={isLoading}
      data={campaignUtils.getTableData(campaigns, CAMPAIGNS_TABLE_CONFIG)}
    />
  </div>
);

export default CampaignsTable;
