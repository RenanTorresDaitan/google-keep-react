import React from 'react';
import Content from './Content';
import Header from './Header';
import SideBar from './SideBar';
import '../styles/styles.css';

export default function App() {
  return (
    <div className="app">
      <Header />
      <section className="main-section">
        <SideBar />
        <Content />
      </section>
    </div>
  );
}
