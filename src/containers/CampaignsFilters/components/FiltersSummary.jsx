import styled from 'styled-components';

export default styled('div')`
  display: flex;
  justify-content: space-between;

  & > *:first-child {
    display: flex;
    align-items: center;

    & > * {
      margin-right: 10px;
      padding: 0 5px;
      background-color: #eeeeee;
    }
  }
`;
