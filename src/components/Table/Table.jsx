import React from 'react';

import { TableContainer, TableCell } from './components';

const Table = ({ data }) => {
  // @todo add checks if data exists / is valid
  const headData = data.head;
  const bodyData = data.body;

  return (
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
  );
};

export default Table;
