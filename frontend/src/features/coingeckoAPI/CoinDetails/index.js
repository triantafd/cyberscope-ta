import React from "react";
import styled from "styled-components";

import { useParams } from "react-router-dom";

import useFetchData from "../../../common/hooks/useFetchData";
import Loader from "../../../components/Loader";
import CoinsDetailTable from "./components/CoinsDetailTable";

const DetailsContainer = styled.div``;

const CoinDetailsPage = () => {
  const { id } = useParams();
  const { data: coin, loading, errors } = useFetchData({ url: `/coins/${id}` });

  //loading
  if (loading) {
    return <Loader />;
  }
  // Error
  if (errors) {
    return <div>{errors}</div>;
  }

  if (coin) {
    return (
      <DetailsContainer>
        <CoinsDetailTable coin={coin} />
      </DetailsContainer>
    );
  }

  return null;
};

export default CoinDetailsPage;
