import { Note } from "./noteElement.esm.js";

const ADD_BTN_ID = "addBtn";
const NOTE_ID = "note";
const NOTE_TXT_ID = "noteTxt";
const CONTAINER_ID = "container";

class InterfaceUser {
  constructor() {
    this.allEvents = [];
    // console.log('this.allEvents :', this.allEvents);
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
    // this.addBtn.addEventListener("click", this.inputTxt);
    this.addBtn.addEventListener("click", this.clearInputTxt);
  }

  note = () => {
    this.noteElement = new Note(this.#bindToElements(NOTE_ID));
    console.log("this.noteElement :", this.noteElement);
    const element = this.noteElement.noteElements();

    this.allEvents.push(element);
    console.log("element :", element.noteContainer);

    console.log("this.allEvents :", this.allEvents);
    element.label.textContent = this.inputTxt();

    element.editBtn.addEventListener("click", this.noteElement.editTextNote);
  };

  inputTxt = () => {
    const textInput = this.input.value;
    console.log("textInput :", textInput);
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
