import React from 'react';

const Table = ({ data }) => {
  // @todo add checks if data exists / is valid
  const headData = data.head;
  const bodyData = data.body;

  return (
    <table>
      <thead>
        {headData.map(({ label, key }) => (
          <td key={key}>{label}</td>
        ))}
      </thead>
      <tbody>
        {bodyData.map(({ rowKey, rowData }) => (
          <tr key={rowKey}>
            {rowData.map(({ colKey, colData, component }) => (
              <td key={colKey}>{component ? component(colData) : colData}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
