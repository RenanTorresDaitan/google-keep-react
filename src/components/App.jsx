import React, { useState } from 'react';
import Content from './Content';
import Header from './Header';
import SideBar from './SideBar';
import '../styles/styles.css';
import NotesProvider from './contexts/NotesProvider';

export default function App() {
  const [expandSideBar, setExpandSideBar] = useState(false);
  const handleSideBarExpansion = () => {
    setExpandSideBar((prevState) => !prevState);
  };
  return (
    <div className="app">
      <NotesProvider>
        <Header handleMenuClick={handleSideBarExpansion} />
        <section className="main-section">
          <SideBar
            expand={expandSideBar}
          />
          <Content />
        </section>
      </NotesProvider>
    </div>
  );
}
