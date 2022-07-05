import React, { useState, useEffect, useMemo } from 'react';
import Content from './Content';
import Header from './Header';
import SideBar from './SideBar';
import '../styles/styles.css';
import db from '../models/DBManager';
import NotesContext from './contexts/NotesContext';

export default function App() {
  const [sidebarSelected, setSidebarSelected] = useState('NOTES');
  const [notesToRender, setNotesToRender] = useState([]);
  const [expandSideBar, setExpandSideBar] = useState(false);
  const handleMenuClick = () => {
    setExpandSideBar((prevState) => !prevState);
  };
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

  const notesContext = useMemo(
    () => ({ sidebarSelected, notesToRender }),
    [sidebarSelected, notesToRender],
  );

  return (
    <div className="app">
      <NotesContext.Provider value={notesContext}>
        <Header handleMenuClick={handleMenuClick} />
        <section className="main-section">
          <SideBar
            changeSidebar={(label) => handleSidebarChange(label)}
            expand={expandSideBar}
          />
          <Content update={() => setUpdate(Date.now())} />
        </section>
      </NotesContext.Provider>
    </div>
  );
}
