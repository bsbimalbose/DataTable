import React from "react";

export default function Pagination({
  currentPage,
  itemsPerPage,
  totalItems,
  handlePageChange
}) {
  const noOfPages = Math.ceil(totalItems / itemsPerPage);

  let pages = [];
  for (let i = 1; i <= noOfPages; i++) {
    pages.push(
      <li
        key={i}
        onClick={() => {
          handlePageChange(i);
        }}
        className={i === currentPage ? "page-item active" : "page-item"}
      >
        <a className="page-link" href="#">
          {i}
        </a>
      </li>
    );
  }
  return (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <nav aria-label="Page navigation example">
        <ul className="pagination">{pages}</ul>
      </nav>
    </div>
  );
}
