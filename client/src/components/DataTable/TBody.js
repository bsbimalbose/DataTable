import React from "react";

export default function TBody({ data, columns, itemsPerPage, keyProp }) {
  return (
    <tbody>
      {data.slice(0, itemsPerPage).map(rowData => (
        <tr key={rowData[keyProp]}>
          {columns.map((col, index) => (
            <td key={index}>{rowData[col.name]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}
