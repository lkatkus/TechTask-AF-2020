import React from 'react';
import styled from 'styled-components';

const Container = styled('div')`
  display: flex;
  align-items: center;
`;

const Indicator = styled('div')`
  width: 10px;
  height: 10px;
  margin-right: 5px;
  border-radius: 5px;
  background-color: ${({ isActive }) => (isActive ? 'green' : 'red')};
`;

const ActivityIndicator = ({ isActive }) => (
  <Container>
    <Indicator isActive={isActive} />
    {isActive ? 'Active' : 'Inactive'}
  </Container>
);
export default ActivityIndicator;
