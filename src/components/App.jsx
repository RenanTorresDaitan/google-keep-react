import React, { useState } from 'react';
import Content from './Content';
import Header from './Header';
import SideBar from './SideBar';
import '../styles/styles.css';

export default function App() {
  const [sidebarSelected, setSidebarSelected] = useState('NOTES');
  const handleSidebarChange = (sidebar) => setSidebarSelected(sidebar);

  return (
    <div className="app">
      <Header />
      <section className="main-section">
        <SideBar changeSidebar={(label) => handleSidebarChange(label)} />
        <Content sidebarSelected={sidebarSelected} />
      </section>
    </div>
  );
}
