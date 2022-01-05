import { NoteElement } from "./noteElement.esm.js";

const ADD_BTN_ID = "addBtn";
const NOTE_ID = "note";
const NOTE_TXT_ID = "noteTxt";

class InterfaceUser {
  createDomElements() {
    this.addBtn = this.#bindToElements(ADD_BTN_ID);
    this.input = this.#bindToElements(NOTE_TXT_ID);
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
    this.addBtn.addEventListener("click", this.inputTxt);
    this.addBtn.addEventListener("click", this.clearInputTxt);
  }

  note = () => {
    this.noteElement = new NoteElement(this.#bindToElements(NOTE_ID));

    this.noteElement.noteElements();
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
