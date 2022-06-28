import React, { useState, useEffect } from 'react';
import Content from './Content';
import Header from './Header';
import SideBar from './SideBar';
import '../styles/styles.css';
import db from '../models/DBManager';

export default function App() {
  const [sidebarSelected, setSidebarSelected] = useState('NOTES');
  const [notesToRender, setNotesToRender] = useState([]);
  const [update, setUpdate] = useState(Date.now());
  const handleSidebarChange = (sidebar) => setSidebarSelected(sidebar);

  const noteList = db.noteItemsList
    .getList()
    .sort((a, b) => b.getTime() - a.getTime())
    .sort((a, b) => Number(b.isPinned) - Number(a.isPinned));

  useEffect(() => {
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
  }, [sidebarSelected, noteList, update]);

  return (
    <div className="app">
      <Header />
      <section className="main-section">
        <SideBar
          active={sidebarSelected}
          changeSidebar={(label) => handleSidebarChange(label)}
        />
        <Content
          sidebarSelected={sidebarSelected}
          notesToRender={notesToRender}
          update={() => setUpdate(Date.now())}
        />
      </section>
    </div>
  );
}
