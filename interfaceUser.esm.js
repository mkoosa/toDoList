import { Note, DIV_CLASS } from "./noteElement.esm.js";

const ADD_BTN_ID = "addBtn";
const NOTE_ID = "note";
const NOTE_TXT_ID = "noteTxt";
const CONTAINER_ID = "container";
const CLEAR_ALL_ID = "clearNotes";

class InterfaceUser {
  constructor() {
    this.allEvents = [];
  }
  createDomElements() {
    this.addBtn = this.#bindToElements(ADD_BTN_ID);
    this.input = this.#bindToElements(NOTE_TXT_ID);
    this.container = this.#bindToElements(CONTAINER_ID);
    this.clearAll = this.#bindToElements(CLEAR_ALL_ID);
    this.events();
  }

  events() {
    this.creatNote();
  }

  #bindToElements(id) {
    const element = document.getElementById(id);
    return element;
  }

  creatNote() {
    this.addBtn.addEventListener("click", this.note);
  }

  note = () => {
    this.noteElement = new Note(this.#bindToElements(NOTE_ID));
    const element = this.noteElement.noteElements();
    this.allEvents.push(element);
    element.label.textContent = this.inputTxt();
    element.editBtn.addEventListener("click", this.noteElement.editTextNote);
    this.clearInputTxt();

    element.il.addEventListener("click", this.removeNote);
    this.clearAll.addEventListener("click", this.clearAllNotes);
  };

  inputTxt = () => {
    const textInput = this.input.value;
    return textInput;
  };

  clearInputTxt = () => {
    this.input.value = "";
  };

  removeNote(e) {
    const element = e.target.parentNode;
    element.remove();
  }

  clearAllNotes = () => {
    this.allEvents.length = 0;
    const notes = [...document.getElementsByClassName(DIV_CLASS)]
    notes.forEach(el => el.remove());

  };
}

window.onload = function () {
  interfaceUser.createDomElements();
};

export const interfaceUser = new InterfaceUser();
