import React from "react";

export default function THead({ columns, handleFilter, handleSort }) {
  return (
    <thead>
      <tr>
        {columns.map((col, index) => (
          <th key={index}>
            <div className="table-filter-head-cell">
              <div className="sort-btn-container">
                <span onClick={() => handleSort(col.name, "asc")}>▲</span>
                <span onClick={() => handleSort(col.name, "desc")}>▼</span>
              </div>
              <div className="table-filter-head">
                {col.header}
                <input
                  className="form-control form-control-sm"
                  placeholder={`Filter by ${col.header}`}
                  onChange={e => handleFilter(col.name, e.target.value)}
                />
              </div>
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
}
