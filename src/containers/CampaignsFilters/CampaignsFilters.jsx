import React from 'react';

const CampaignsFilters = ({ dateFilterHandler, nameFilterHandler }) => (
  <div>
    <input
      id='startDate'
      name='startDate'
      type='date'
      placeholder='Start Date'
      onChange={() => {
        const startDate = document.getElementById('startDate').value;
        const endDate = document.getElementById('endDate').value;

        dateFilterHandler(startDate, endDate);
      }}
    />
    <input
      id='endDate'
      name='endDate'
      type='date'
      placeholder='End Date'
      onChange={() => {
        const startDate = document.getElementById('startDate').value;
        const endDate = document.getElementById('endDate').value;

        dateFilterHandler(startDate, endDate);
      }}
    />
    <input
      id='searchName'
      type='text'
      name='searchName'
      placeholder='Search by name'
    />
    <button
      type='button'
      onClick={() => {
        const filter = document.getElementById('searchName').value;

        nameFilterHandler(filter);
      }}
    >
      filter
    </button>
  </div>
);

export default CampaignsFilters;
