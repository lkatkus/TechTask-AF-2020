import React from 'react';

import {
  TableWrapper,
  TableContainer,
  TableCell,
  TableMessage,
  TableStatusIndicator,
} from './components';

const Table = ({ isLoading, data }) => {
  // @todo add checks if data exists / is valid
  const headData = data.head;
  const bodyData = data.body;

  return (
    <TableWrapper>
      <TableContainer>
        <thead>
          {headData.map(({ label, key }) => (
            <TableCell isHeaderCell key={key}>
              {label}
            </TableCell>
          ))}
        </thead>
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
      </TableContainer>
      {isLoading && <TableStatusIndicator />}
      {bodyData.length === 0 && (
        <TableMessage>Please add campaign</TableMessage>
      )}
    </TableWrapper>
  );
};

export default Table;
