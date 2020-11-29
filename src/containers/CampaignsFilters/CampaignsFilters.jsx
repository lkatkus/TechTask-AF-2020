import React, { useState, useEffect, useRef } from 'react';
import { equals } from 'ramda';

import { Button, Input } from '@components';

import {
  FiltersContainer,
  FiltersInputContainer,
  FiltersSummary,
} from './components';

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
          <Input
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
          <Input
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
          <Input
            ref={nameFilterRef}
            type='text'
            id='searchName'
            name='searchName'
            placeholder='Search by name'
          />
          <Button
            type='button'
            onClick={() => {
              setFilter((currentFilter) => ({
                ...currentFilter,
                name: nameFilterRef.current.value,
              }));
            }}
          >
            Search
          </Button>
        </div>
      </FiltersInputContainer>

      <FiltersSummary>
        <div>
          {activeFilter && (
            <React.Fragment>
              {activeFilter.name && <div>Name - {activeFilter.name}</div>}
              {activeFilter.startDate && (
                <div>Start date - {activeFilter.startDate}</div>
              )}
              {activeFilter.endDate && (
                <div>End date - {activeFilter.endDate}</div>
              )}
            </React.Fragment>
          )}
        </div>
        <Button
          type='button'
          onClick={() => {
            nameFilterRef.current.value = null;
            startFilterRef.current.value = null;
            endFilterRef.current.value = null;

            setFilter();
          }}
        >
          Clear filters
        </Button>
      </FiltersSummary>
    </FiltersContainer>
  );
};

export default CampaignsFilters;
