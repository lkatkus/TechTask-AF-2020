import React from 'react';

import { Table } from '@components';
import { getCampaignsTable } from '@utils';

const CAMPAIGNS_TABLE_CONFIG = [
  { label: 'Name', key: 'name' },
  { label: 'User Name', key: 'userId' },
  { label: 'Start Date', key: 'startDate' },
  { label: 'End Date', key: 'endDate' },
  {
    label: 'Active',
    key: 'isActive',
    component: (value) => (value ? 'Active' : 'Inactive'),
  },
  { label: 'Budget', key: 'budget' },
];

const CampaignsTable = ({ campaigns }) => (
  <div>
    <Table data={getCampaignsTable(campaigns, CAMPAIGNS_TABLE_CONFIG)} />
  </div>
);

export default CampaignsTable;
