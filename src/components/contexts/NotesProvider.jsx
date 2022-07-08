import React, { useState, useEffect, useMemo, createContext } from 'react';
import PropTypes from 'prop-types';
import db from '../../models/DBManager';

const filterNotesList = (predicate) => db.noteItemsList
  .getList()
  .sort((a, b) => b.getTime() - a.getTime())
  .sort((a, b) => Number(b.isPinned) - Number(a.isPinned))
  .filter(predicate);

export const NotesContext = createContext(null);
function NotesProvider({ children }) {
  const [sidebarSelected, setSidebarSelected] = useState('NOTES');
  const [notesToRender, setNotesToRender] = useState([]);
  const [update, setUpdate] = useState(Date.now());
  const handleUpdate = () => setUpdate(Date.now());

  const handleSidebarChange = (sidebar) => setSidebarSelected(sidebar);
  const noteList = db.noteItemsList.getList();
  useEffect(() => {
    if (sidebarSelected === 'NOTES') {
      setNotesToRender(
        filterNotesList((item) => !item.isArchived && !item.isTrashed),
      );
    }
    if (sidebarSelected === 'REMINDERS') {
      setNotesToRender(
        filterNotesList((item) => item.isReminder && !item.isTrashed),
      );
    }
    if (sidebarSelected === 'ARCHIVE') {
      setNotesToRender(
        filterNotesList((item) => item.isArchived && !item.isTrashed),
      );
    }
    if (sidebarSelected === 'TRASH') {
      setNotesToRender(filterNotesList((item) => item.isTrashed));
    }
  }, [sidebarSelected, noteList, update]);

  const context = useMemo(
    () => ({
      sidebarSelected,
      notesToRender,
      handleSidebarChange,
      handleUpdate,
    }),
    [sidebarSelected, notesToRender],
  );
  return (
    <NotesContext.Provider value={context}>{children}</NotesContext.Provider>
  );
}

NotesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default NotesProvider;
