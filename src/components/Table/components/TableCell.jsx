import styled from 'styled-components';

export default styled('td')`
  padding: 10px 20px;
  color: ${({ isHeaderCell }) => isHeaderCell && 'white'};
  background-color: ${({ isHeaderCell }) => isHeaderCell && 'blue'};
`;
