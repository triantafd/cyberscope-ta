import React, { useState } from "react";
import useFetchData from "../../../common/hooks/useFetchData";
import styled from "styled-components";
import Loader from "../../../components/Loader";
import Pagination from "../../../components/Pagination";
import CoinsTable from "./components/CoinsListTable";

const CoinsContainer = styled.div``;

const DEFAULT_PAGE_NUMBER = 1;
const DEFAULT_PAGE_SIZE = 10;

const CoinsList = () => {
  const [requestParams, setRequestParams] = useState({
    page: DEFAULT_PAGE_NUMBER,
    per_page: DEFAULT_PAGE_SIZE,
  });

  const {
    data: coins,
    loading,
    errors,
  } = useFetchData({
    url: `/coins/markets`,
    params: requestParams,
  });

  const handlePageChange = (newPage) => {
    setRequestParams((prevParams) => ({
      ...prevParams,
      page: newPage,
    }));
  };

  const handlePageSizeChange = (newPageSize) => {
    setRequestParams((prevParams) => ({
      ...prevParams,
      page: DEFAULT_PAGE_NUMBER,
      per_page: newPageSize,
    }));
  };

  //loading
  if (loading) {
    return <Loader />;
  }
  // Error

  return (
    <CoinsContainer>
      <CoinsTable coins={coins} />
      {errors}
      <Pagination
        page={requestParams.page}
        pageSize={requestParams.per_page}
        onChangePage={handlePageChange}
        onChangePageSize={handlePageSizeChange}
        paginationId="coinsList"
      />
    </CoinsContainer>
  );
};

export default CoinsList;
