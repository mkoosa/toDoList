import { Note, DIV_CLASS } from "./noteElement.esm.js";
import { itemStorage } from "./storage.esm.js";

const ADD_BTN_ID = "addBtn";
const CONTAINER_ID = "container";
const CLEAR_ALL_ID = "clearNotes";
const NOTE_TXT_ID = "noteTxt";

export const NOTE_ID = "note";

class InterfaceUser {
  constructor() {
    this.allEvents = [];
  }
  createDomElements() {
    this.addBtn = this.bindToElements(ADD_BTN_ID);
    this.input = this.bindToElements(NOTE_TXT_ID);
    this.container = this.bindToElements(CONTAINER_ID);
    this.clearAll = this.bindToElements(CLEAR_ALL_ID);
    this.events();
    this.clearAll.addEventListener("click", this.clearStorage);

    if (!this.itemsStorage) {
      return;
    }
    this.itemsStorage.creteLocalStorage();
  }

  events() {
    this.creatNote();
  }

  bindToElements(id) {
    const element = document.getElementById(id);
    return element;
  }

  creatNote() {
    this.addBtn.addEventListener("click", this.note);
  }

  note = (e) => {
   
    this.noteElement = new Note(this.bindToElements(NOTE_ID));
    const element = this.noteElement.noteElements();
    this.allEvents.push(element);
    element.label.textContent = this.inputTxt();
    element.editBtn.addEventListener("click", this.noteElement.editTextNote);
    this.clearInputTxt();
    element.il.addEventListener("click", this.removeNote);
    this.clearAll.addEventListener("click", this.clearAllNotes);
    itemStorage.createLocalStorage();
  };

  inputTxt = () => {
    const textInput = this.input.value;
    return textInput;
  };

  clearInputTxt = () => {
    this.input.value = "";
  };

  removeNote = (e) => {
    const element = e.target.parentNode;
    element.remove();
    const indexElementToRemove = e.target.getAttribute("target");
    this.clearNote(this.allEvents, indexElementToRemove);
  };

  clearNote(elements, index) {
    elements.forEach((element, i) => {
      if (i == index) {
        elements.splice(i, 1);
      }
    });

    localStorage.clear();
    this.prepareLocalStorage();
  }

  clearAllNotes = () => {
    this.allEvents.length = 0;
    const notes = [...document.getElementsByClassName(DIV_CLASS)];
    notes.forEach((el) => el.remove());
  };

  prepareLocalStorage() {
    itemStorage.createLocalStorage();
  }

  clearStorage() {
    itemStorage.clearStorage();
  }
}

window.onload = function () {
  interfaceUser.createDomElements();
  itemStorage.getItemsFromStorage();
};

export const interfaceUser = new InterfaceUser();
