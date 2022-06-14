import React from 'react';
import Content from './Content';
import Header from './Header';
import SideBar from './SideBar';

import DBManager from '../models/DBManager';

export default function App() {
  const APP_NAME = 'Keep Notes';

  return (
    <div className="app">
      <Header />
      <SideBar />
      <Content />
    </div>
  );
}
