import React from 'react';
import styled from 'styled-components';

const PageContainer = styled('div')`
  background-color: #eeeeee;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px 0;
  height: 100%;
`;

const PageChildrenContainer = styled('div')`
  background-color: white;
  width: 100%;
  padding: 10px;
  max-width: 1000px;
`;

const PageWrapper = ({ children }) => (
  <PageContainer>
    <PageChildrenContainer>{children}</PageChildrenContainer>
  </PageContainer>
);

export default PageWrapper;
