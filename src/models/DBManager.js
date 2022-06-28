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
    this.noteItemsList.clearList();
    parsedList._list.forEach((storedNote) => {
      this.noteItemsList.addNoteToList(new NoteItemModel(storedNote));
    });
  }

  deleteOldNotes() {
    this.noteItemsList.getList().forEach((item) => {
      if (item.checkTimeToDelete()) {
        this.noteItemsList.removeNoteFromList(item.id);
      }
    });
  }

  updateNotesOnLocalStorage() {
    this.deleteOldNotes();
    localStorage.setItem(this.APP_NAME, JSON.stringify(this.noteItemsList));
  }

  createNewNoteItem(noteData) {
    const newNoteItem = new NoteItemModel(noteData);
    this.noteItemsList.addNoteToList(newNoteItem);
    this.updateNotesOnLocalStorage();
  }

  updateNote(id, noteData) {
    const oldNote = this.noteItemsList.getNoteById(id);
    this.noteItemsList.removeNoteFromList(id);
    this.createNewNoteItem({ ...oldNote, ...noteData });
  }
}

const db = new DBManager();
Object.freeze(db);
export default db;
