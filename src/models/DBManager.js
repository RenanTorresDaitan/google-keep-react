import NoteListModel from './NoteListModel';
import NoteItemModel from './NoteItemModel';

class DBManager {
  constructor() {
    this.APP_NAME = 'Keep-Notes';
    this.noteItemsList = new NoteListModel();
    this.loadNotesFromLocalStorage();
  }

  loadNotesFromLocalStorage() {
    const storedList = localStorage.getItem(this.APP_NAME);
    if (typeof storedList !== 'string') return;
    const parsedList = JSON.parse(storedList);
    parsedList._list.forEach((storedNote) => {
      const note = storedNote;
      this.noteItemsList.addNoteToList(new NoteItemModel(note));
    });
    this.deleteOldNotes();
  }

  getInstance() {
    return this;
  }

  deleteOldNotes() {
    this.noteItemsList.getList().forEach((item) => {
      if (item.checkTimeToDelete()) {
        this.noteItemsList.removeNoteFromList(item.getId());
      }
    });
  }

  updateNotesOnLocalStorage() {
    localStorage.setItem(this.APP_NAME, JSON.stringify(this.noteItemsList));
  }

  createNewNoteItem(noteInfo) {
    const newNoteItem = new NoteItemModel(noteInfo);
    this.noteItemsList.addNoteToList(newNoteItem);
    this.updateNotesOnLocalStorage();
  }
}

const db = new DBManager();
Object.freeze(db);
export default db;
