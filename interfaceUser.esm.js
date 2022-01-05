import { NoteElement } from "./noteElement.esm.js";

const ADD_BTN = "addBtn";
const NOTE_CONTAINER = "noteContainer";

class InterfaceUser {
  createDomElements() {
    this.addBtn = this.#bindToElements(ADD_BTN);
    // this.noteContainer = this.#bindToElements("noteContainer");
    // this.noteContainer = this.#bindToElement;
    this.noteTxt - this, this.#bindToElements("noteTxt");
    this.editBtn = this.#bindToElements("editBtn");
    this.clearNotes = this.#bindToElements("clearNotes");
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
    this.noteContainer = new NoteElement(this.#bindToElements(NOTE_CONTAINER));
    console.log("this.noteContainer :", this.noteContainer);
  };
}

window.onload = function () {
  const interfaceUser = new InterfaceUser();
  interfaceUser.createDomElements();
};
