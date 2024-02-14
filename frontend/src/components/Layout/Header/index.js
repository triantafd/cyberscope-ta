import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  background-color: #333;
  color: white;
  text-align: center;
  padding: 10px 0;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Data from CoinGecko. Ta for CyberScrope</h1>
    </HeaderContainer>
  );
};

export default Header;
