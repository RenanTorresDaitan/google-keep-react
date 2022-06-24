import db from '../models/DBManager';

export default class NoteItemController {
  constructor() {
    this.dbManager = db;
    this.SEVEN_DAYS_IN_MILLISECONDS = 604800000;
  }

  createNewNote(action) {
    const noteTitleTextarea = document.querySelector(
      '.newnote-title-textarea',
    ).value;
    const noteDescTextarea = document.querySelector(
      '.newnote-desc-textarea',
    ).value;
    const newNotePinned = document
      .querySelector('.newnote-pin-button')
      .classList.contains('note-pinned');
    const newNoteToDoItems = document
      .querySelector('.newnote-to-do-items-area')
      .querySelectorAll('.newnote-to-do-item');
    const emptyFields = noteTitleTextarea === '' && noteDescTextarea === '';

    const newNoteToCreate = {
      noteTitle: '',
      noteDescription: '',
      noteTime: { creationDate: Date.now(), deletionDate: null },
      isPinned: false,
      isToDoList: false,
      isReminder: false,
      isArchived: false,
      isTrashed: false,
      toDoItems: [],
    };

    // Update Note fields
    newNoteToCreate.noteTitle = noteTitleTextarea;
    newNoteToCreate.noteDescription = noteDescTextarea;
    newNoteToCreate.isPinned = newNotePinned;
    if (action === 'Archive') newNoteToCreate.isArchived = true;

    // To do items handling
    Array.from(newNoteToDoItems).forEach((item, index) => {
      if (item === document.querySelector('.newnote-item-placeholder')) {
        return;
      }
      const checkbox = item.querySelector('.newnote-to-do-item-checkbox');
      const textArea = item.querySelector('.newnote-item-placeholder-textarea');
      const newToDoItem = {
        id: index,
        label: textArea.value,
        isChecked: checkbox.getAttribute('checked') === 'true',
      };
      newNoteToCreate.toDoItems.push(newToDoItem);
    });
    newNoteToCreate.isToDoList = newNoteToCreate.toDoItems.length > 0;
    if (!emptyFields || newNoteToCreate.isToDoList) {
      this.dbManager.createNewNoteItem(newNoteToCreate);
      this.sidebarView.changeToActiveSidebar();
    }
  }

  updateNote(id, noteItem) {
    const updatedNoteItem = {
      ...this.dbManager.noteItemsList.getNoteById(id),
      ...noteItem,
    };
    this.dbManager.noteItemsList.removeNoteFromList(id);
    this.dbManager.createNewNoteItem(updatedNoteItem);
    this.updateNotes();
  }

  updateNotes() {
    this.dbManager.updateNotesOnLocalStorage();
  }

  // Buttons methods

  changeNoteColor(id, color) {
    this.dbManager.noteItemsList.getNoteById(id).color = color;
    this.updateNotes();
  }

  addReminder(id) {
    this.dbManager.noteItemsList.getNoteById(id).isReminder = true;
    this.updateNotes();
  }

  archiveNote(id) {
    const noteFromDB = this.dbManager.noteItemsList.getNoteById(id);
    noteFromDB.isArchived = !noteFromDB.isArchived;
    this.updateNotes();
  }

  deleteNote(id) {
    this.dbManager.noteItemsList.removeNoteFromList(id);
    this.updateNotes();
  }

  deleteTrashedNotes() {
    this.dbManager.noteItemsList.getList().forEach((item) => {
      if (item.isTrashed) {
        this.dbManager.noteItemsList.removeNoteFromList(item.id);
      }
    });
    this.updateNotes();
  }

  restoreNote(id) {
    this.dbManager.noteItemsList.getNoteById(id).isTrashed = false;
    this.dbManager.noteItemsList.getNoteById(id).noteTime.deletionDate = null;
    this.updateNotes();
  }

  trashNote(id) {
    const noteToTrash = this.dbManager.noteItemsList.getNoteById(id);
    noteToTrash.isTrashed = true;
    noteToTrash.noteTime.deletionDate = Date.now() + this.SEVEN_DAYS_IN_MILLISECONDS;
    this.updateNotes();
  }

  pinNote(id) {
    const noteToPin = this.dbManager.noteItemsList.getNoteById(id);
    noteToPin.isPinned = !noteToPin.isPinned;
    this.updateNotes();
  }

  // Todo items

  toggleChecked(noteId, itemId) {
    const item = this.dbManager.noteItemsList
      .getNoteById(noteId)
      .getToDoItemById(itemId);
    item.isChecked = !item.isChecked;
    this.updateNotes();
  }

  deleteToDoItem(noteId, itemId) {
    this.dbManager.noteItemsList
      .getNoteById(noteId)
      .removeToDoItemFromList(itemId);
    this.updateNotes();
  }

  createNewToDoItem(id, event) {
    const noteToUpdate = this.dbManager.noteItemsList.getNoteById(id);
    if (event.keyCode >= 65 && event.keyCode <= 90) {
      const newToDoItem = {
        label: event.key,
        isChecked: false,
      };
      noteToUpdate.addToDoItem(newToDoItem);
      this.updateNotes();
      const newToDoItemEl = document.querySelector(
        `[data-note-id="${id}"] [data-item-id="${
          noteToUpdate.getToDoItemById(noteToUpdate.getToDoItems().length - 1)
            .id
        }"] > label`,
      );
      newToDoItemEl.click();
      event.preventDefault();
    } else {
      event.preventDefault();
    }
  }
}
