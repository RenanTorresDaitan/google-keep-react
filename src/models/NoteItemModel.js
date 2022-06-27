export default class NoteItemModel {
  constructor({
    _id = null,
    noteTitle = '',
    noteDescription = '',
    noteTime = { creationDate: Date.now(), deletionDate: null },
    isPinned = false,
    isToDoList = false,
    isReminder = false,
    isArchived = false,
    isTrashed = false,
    toDoItems = [],
    color = 'white',
  } = {}) {
    this._id = _id;
    this.noteTitle = noteTitle;
    this.noteDescription = noteDescription;
    this.noteTime = noteTime;
    this.isPinned = isPinned;
    this.isToDoList = isToDoList;
    this.isReminder = isReminder;
    this.isArchived = isArchived;
    this.isTrashed = isTrashed;
    this.toDoItems = toDoItems;
    this.color = color;
  }

  get id() {
    return this._id;
  }

  set id(newId) {
    this._id = newId;
  }

  get title() {
    return this.noteTitle;
  }

  set title(noteTitle) {
    this.noteTitle = noteTitle;
  }

  get description() {
    return this.noteDescription;
  }

  set description(noteDescription) {
    this.noteDescription = noteDescription;
  }

  getTime() {
    return this.noteTime.creationDate;
  }

  setTimeToDelete(time) {
    this.noteTime.deletionDate = time;
  }

  checkTimeToDelete() {
    if (this.noteTime.deletionDate == null) return false;
    if (this.noteTime.deletionDate - Date.now() >= 0) return false;
    return true;
  }

  isPinned() {
    return this.isPinned;
  }

  getColor() {
    return this.color;
  }

  setColor(color) {
    this.color = color;
  }

  getToDoItems() {
    return this.toDoItems;
  }

  getToDoItemById(id) {
    return this.toDoItems.find((item) => item.id === id);
  }

  addToDoItem(item) {
    const newItem = item;
    if (this.toDoItems.length === 0) {
      newItem.id = 0;
    } else {
      newItem.id = this.getToDoItemById(this.toDoItems.length - 1).id + 1;
    }
    this.toDoItems.push(newItem);
  }

  removeToDoItemFromList(id) {
    this.toDoItems = this.getToDoItems().filter((item) => item.id !== id);
  }
}
