import React from 'react';

import {
  TableWrapper,
  TableContainer,
  TableCell,
  TableMessage,
  TableStatusIndicator,
} from './components';

const Table = ({ isLoading, data }) => {
  const headData = data.head;
  const bodyData = data.body;

  return (
    <TableWrapper>
      <TableContainer>
        {headData && (
          <thead>
            {headData.map(({ label, key }) => (
              <TableCell isHeaderCell key={key}>
                {label}
              </TableCell>
            ))}
          </thead>
        )}
        {bodyData && (
          <tbody>
            {bodyData.map(({ rowKey, rowData }) => (
              <tr key={rowKey}>
                {rowData.map(({ colKey, colData, component }) => (
                  <TableCell key={colKey}>
                    {component ? component(colData) : colData}
                  </TableCell>
                ))}
              </tr>
            ))}
          </tbody>
        )}
      </TableContainer>
      {isLoading && <TableStatusIndicator />}
      {bodyData.length === 0 && (
        <TableMessage>Please add campaigns or update filters</TableMessage>
      )}
    </TableWrapper>
  );
};

export default Table;
