import React from "react";

import {
  Table,
  Th,
  Td,
  Tr,
  LinkStyled,
  TableContainer,
} from "../../../../components/CustomTable";
import { Link } from "react-router-dom";

const CoinsDetailTable = ({ coin }) => {
  return (
    <TableContainer>
      <Table>
        <thead>
          <Tr>
            <Th>Name</Th>
            <Th>Symbol</Th>
            <Th>Current Price</Th>
            <Th>High 24h</Th>
            <Th>Low 24h</Th>
            <Th>Price Change 24h</Th>
            <Th>Price Change 7d</Th>
            <Th>Price Change 14d</Th>
            <Th>Price Change 30d</Th>
            <Th>Price Change 60d</Th>
            <Th>Price Change 200d</Th>
          </Tr>
        </thead>
        <tbody>
          {!!coin && (
            <>
              <Tr key={coin.id}>
                <Td>
                  <LinkStyled as={Link} to={`/coins/${coin.id}`}>
                    {coin.name}
                  </LinkStyled>
                </Td>
                <Td>{coin.symbol}</Td>
                <Td>{coin.current_price_usd}</Td>
                <Td>{coin.high_24h_usd}</Td>
                <Td>{coin.low_24h_usd}</Td>
                <Td>{coin.price_change_24h}</Td>
                <Td>{coin.price_change_7d}</Td>
                <Td>{coin.price_change_14d}</Td>
                <Td>{coin.price_change_30d}</Td>
                <Td>{coin.price_change_60d}</Td>
                <Td>{coin.price_change_200d}</Td>
              </Tr>
            </>
          )}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default CoinsDetailTable;
