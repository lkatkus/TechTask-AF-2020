import React, { useState, useEffect, useRef } from 'react';
import { equals } from 'ramda';
import styled from 'styled-components';

const FiltersContainer = styled('div')`
  margin-bottom: 20px;
`;

const FiltersInputContainer = styled('div')`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const SummaryContainer = styled('div')`
  display: flex;
  justify-content: space-between;
`;

const CampaignsFilters = ({ filterHandler }) => {
  const nameFilterRef = useRef();
  const startFilterRef = useRef();
  const endFilterRef = useRef();

  const [filter, setFilter] = useState();
  const [activeFilter, setActiveFilter] = useState();

  useEffect(() => {
    if (!equals(filter, activeFilter)) {
      setActiveFilter(filter);
      filterHandler(filter);
    }
  }, [filter, activeFilter, filterHandler]);

  return (
    <FiltersContainer>
      <FiltersInputContainer>
        <div>
          <input
            ref={startFilterRef}
            type='date'
            id='startDate'
            name='startDate'
            placeholder='Start Date'
            max={filter && filter.endDate}
            onChange={(e) =>
              setFilter((currentFilter) => ({
                ...currentFilter,
                startDate: e.target.value,
              }))
            }
          />
          <input
            ref={endFilterRef}
            type='date'
            id='endDate'
            name='endDate'
            placeholder='End Date'
            min={filter && filter.startDate}
            onChange={(e) =>
              setFilter((currentFilter) => ({
                ...currentFilter,
                endDate: e.target.value,
              }))
            }
          />
        </div>
        <div>
          <input
            ref={nameFilterRef}
            type='text'
            id='searchName'
            name='searchName'
            placeholder='Search by name'
          />
          <button
            type='button'
            onClick={() => {
              setFilter((currentFilter) => ({
                ...currentFilter,
                name: nameFilterRef.current.value,
              }));
            }}
          >
            Search
          </button>
        </div>
      </FiltersInputContainer>

      <SummaryContainer>
        <div>{JSON.stringify(activeFilter)}</div>
        <button
          type='button'
          onClick={() => {
            nameFilterRef.current.value = null;
            startFilterRef.current.value = null;
            endFilterRef.current.value = null;

            setFilter();
          }}
        >
          Clear filters
        </button>
      </SummaryContainer>
    </FiltersContainer>
  );
};

export default CampaignsFilters;
