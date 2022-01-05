import { NoteElement } from "./noteElement.esm.js";

const ADD_BTN = "addBtn";
const NOTE = "note";

class InterfaceUser {
  createDomElements() {
    this.addBtn = this.#bindToElements(ADD_BTN);
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
    this.noteElement = new NoteElement(this.#bindToElements(NOTE));

    this.noteElement.noteElements();
  };
}

window.onload = function () {
  const interfaceUser = new InterfaceUser();
  interfaceUser.createDomElements();
};
