import React, { useState, useEffect } from 'react';
import Content from './Content';
import Header from './Header';
import SideBar from './SideBar';
import '../styles/styles.css';
import db from '../models/DBManager';

export default function App() {
  const [sidebarSelected, setSidebarSelected] = useState('NOTES');
  const [notesToRender, setNotesToRender] = useState([]);

  const handleSidebarChange = (sidebar) => setSidebarSelected(sidebar);

  useEffect(() => {
    const noteList = db.noteItemsList.getList();
    if (sidebarSelected === 'NOTES') {
      setNotesToRender(
        noteList.filter((item) => !item.isArchived && !item.isTrashed),
      );
    }
    if (sidebarSelected === 'REMINDERS') {
      setNotesToRender(
        noteList.filter((item) => item.isReminder && !item.isTrashed),
      );
    }
    if (sidebarSelected === 'ARCHIVE') {
      setNotesToRender(
        noteList.filter((item) => item.isArchived && !item.isTrashed),
      );
    }
    if (sidebarSelected === 'TRASH') {
      setNotesToRender(noteList.filter((item) => item.isTrashed));
    }
  }, [sidebarSelected]);

  return (
    <div className="app">
      <Header />
      <section className="main-section">
        <SideBar
          active={sidebarSelected}
          changeSidebar={(label) => handleSidebarChange(label)}
        />
        <Content notesToRender={notesToRender} />
      </section>
    </div>
  );
}
