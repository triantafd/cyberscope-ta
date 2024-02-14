import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  background-color: #333;
  color: white;
  text-align: center;
  padding: 10px 0;
  width: 100%;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>
        &copy; 2024 TA for CyberScrope. Data from CoinGecko.
      </p>
    </FooterContainer>
  );
};

export default Footer;
