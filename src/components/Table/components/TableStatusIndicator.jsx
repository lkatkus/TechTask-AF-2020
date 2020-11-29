import React from 'react';
import styled from 'styled-components';

const Container = styled('div')`
  background-color: rgba(50, 50, 50, 0.5);
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
`;

const TableStatusIndicator = () => <Container>LOADING...</Container>;

export default TableStatusIndicator;
