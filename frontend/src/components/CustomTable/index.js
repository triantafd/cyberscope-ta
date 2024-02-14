import styled from "styled-components";

const TableContainer = styled.div`
  overflow-x: auto;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  background-color: #f4f4f4;
  color: #333;
  padding: 10px;
  text-align: left;
`;

const Td = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const LinkStyled = styled.a`
  text-decoration: none;
  color: inherit;

  &:hover {
    color: #007bff;
  }
`;

export { TableContainer, Table, Th, Td, Tr, LinkStyled };
