import { Note} from "./noteElement.esm.js";

const ADD_BTN_ID = "addBtn";
const NOTE_ID = "note";
const NOTE_TXT_ID = "noteTxt";
const CONTAINER_ID = "container";

class InterfaceUser {
  constructor() {
    this.allEvents = [];
   
  }
  createDomElements() {
    this.addBtn = this.#bindToElements(ADD_BTN_ID);
    this.input = this.#bindToElements(NOTE_TXT_ID);
    this.container = this.#bindToElements(CONTAINER_ID);
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
   
  };

  inputTxt = () => {
    const textInput = this.input.value;
    return textInput;
  };

  clearInputTxt = () => {
    this.input.value = "";
  };
}

window.onload = function () {
  interfaceUser.createDomElements();
};

export const interfaceUser = new InterfaceUser();
