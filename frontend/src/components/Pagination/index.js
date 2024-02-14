import React from "react";

const Pagination = ({
  page,
  pageSize,
  onChangePage,
  onChangePageSize,
  paginationId,
}) => {
  const pageSizes = [10, 20, 50, 100];

  return (
    <div id={`pagination-${paginationId}`}>
      <button
        onClick={() => onChangePage(page - 1, paginationId)}
        disabled={page <= 1}
      >
        Previous
      </button>
      <button onClick={() => onChangePage(page + 1, paginationId)}>Next</button>
      <select
        value={pageSize}
        onChange={(e) =>
          onChangePageSize(parseInt(e.target.value, 10), paginationId)
        }
      >
        {pageSizes.map((size) => (
          <option key={size} value={size}>
            {size} items per page
          </option>
        ))}
      </select>
    </div>
  );
};

export default Pagination;
