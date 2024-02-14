import React from "react";
import Header from "./Header";
import Footer from "./Footer";

import styled from "styled-components";
import Sidebar from "./Siderbar";

const breakpoints = {
  tablet: "960px",
};

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`;

const MainContent = styled.main`
  background-color: #fbfbfb;
  padding: 35px 0;
  display: flex;
  flex-direction: row;
  margin-bottom: 45px;
  box-sizing: content-box;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 10x 10px;
    flex-direction: column;
  }
`;

const HeaderWrapper = styled.div`
  width: 100%;
`;

const FooterWrapper = styled.div`
  width: 100%;
`;

const ContentWrapper = styled.div`
  box-shadow: 0px 1px 4px 1px #c4c4d2;
  margin-top: 50px;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  minHeight : 'calc(100vh - 108 -73)'
  
  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 0;
  }
`;

const MainSection = styled.div`
  height: 80vh;
`;

const SidebarContainer = styled.aside`
  padding: 0px 20px;
  background-color: gray;
  width: 300px;


  @media (max-width: ${breakpoints.tablet}) {
    visibility: hidden;
    width: 0;
    min-width: 0;
    padding: 0;
  }
`;

const Layout = ({ children }) => {
  return (
    <AppContainer>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>

      <ContentWrapper>
        <MainContent>
          <SidebarContainer>
            <Sidebar />
          </SidebarContainer>
          <MainSection>{children}</MainSection>
        </MainContent>
      </ContentWrapper>

      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </AppContainer>
  );
};

export default Layout;
