import React, { useState } from 'react';
import Content from '../Content';
import Header from '../Header';
import SideBar from '../SideBar';
import NotesProvider from '../contexts/NotesProvider';
import { MainSection, StyledApp } from './styles';
import GlobalStyle from '../../styles/globalStyles';

const App = () => {
  const [expandSideBar, setExpandSideBar] = useState(false);
  const handleSideBarExpansion = () => {
    setExpandSideBar((prevState) => !prevState);
  };
  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <NotesProvider>
          <Header handleMenuClick={handleSideBarExpansion} />
          <MainSection>
            <SideBar expand={expandSideBar} />
            <Content />
          </MainSection>
        </NotesProvider>
      </StyledApp>
    </>
  );
};

export default App;
