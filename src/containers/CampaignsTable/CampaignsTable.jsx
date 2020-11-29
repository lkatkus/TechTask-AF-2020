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
    // @todo add currency format
    component: (value) => `${value} USD`,
  },
];

const CampaignsTable = ({ campaigns }) => (
  <div>
    <Table
      data={campaignUtils.getTableData(campaigns, CAMPAIGNS_TABLE_CONFIG)}
    />
  </div>
);

export default CampaignsTable;
