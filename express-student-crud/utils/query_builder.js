// MongoDB Query Filtering and Pagination utility for Express CRUD

const buildPaginationQuery = (queryParams) => {
  const page = parseInt(queryParams.page, 10) || 1;
  const limit = parseInt(queryParams.limit, 10) || 10;
  const skip = (page - 1) * limit;

  // Sorting parser
  let sortCriteria = { createdAt: -1 };
  if (queryParams.sortBy) {
    const parts = queryParams.sortBy.split(":");
    sortCriteria[parts[0]] = parts[1] === "asc" ? 1 : -1;
  }

  // Filter conditions
  const filter = {};
  if (queryParams.search) {
    filter.$or = [
      { name: { $regex: queryParams.search, $options: "i" } },
      { email: { $regex: queryParams.search, $options: "i" } }
    ];
  }

  if (queryParams.status) {
    filter.status = queryParams.status;
  }

  return { filter, skip, limit, page, sortCriteria };
};

const formatPaginatedResponse = ({ data, totalCount, page, limit }) => {
  const totalPages = Math.ceil(totalCount / limit);
  return {
    success: true,
    meta: {
      currentPage: page,
      totalPages,
      pageSize: limit,
      totalRecords: totalCount,
      hasNext: page < totalPages,
      hasPrev: page > 1
    },
    data
  };
};

module.exports = { buildPaginationQuery, formatPaginatedResponse };
