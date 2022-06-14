import React from 'react';
import Content from './Content';
import Header from './Header';
import SideBar from './SideBar';

import DBManager from '../models/DBManager';

export default function App() {
  const APP_NAME = 'Keep-Notes';
  const db = new DBManager(APP_NAME);
  db.loadNotesFromLocalStorage();
  return (
    <div className="app">
      <Header />
      <SideBar db={db} />
      <Content db={db} />
    </div>
  );
}
