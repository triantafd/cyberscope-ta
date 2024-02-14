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

const CoinsListTable = ({ coins }) => {
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
          </Tr>
        </thead>
        <tbody>
          {coins?.map((coin) => (
            <Tr key={coin.id}>
              <Td>
                <LinkStyled as={Link} to={`/coins/${coin.id}`}>
                  {coin.name}
                </LinkStyled>
              </Td>
              <Td>{coin.symbol}</Td>
              <Td>{coin.current_price}</Td>
              <Td>{coin.high_24h}</Td>
              <Td>{coin.low_24h}</Td>
              <Td>{coin.price_change_percentage_24h}%</Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default CoinsListTable;
