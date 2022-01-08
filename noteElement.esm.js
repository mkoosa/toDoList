import { interfaceUser } from "./interfaceUser.esm.js";
import { EditNote } from "./editNote.esm.js";

export const CONTAINER_BLUR_CLASS = "container--blur";
const DIV_CLASS = "note__container";
const I_ELEMENT_CLASS_FIRST = "fas";
const I_ELEMENT_CLASS_SECOND = "fa-eraser";
const INPUT_CLASS = "note__input";
const LABEL_CLASS = "note__txt";
const EDIT_BTN_CLASS = "note__edit-btn";

export class Note {
  constructor(element) {
    this.element = element;
  }

  createDomElement(kindOfElement, classNameFisrt, classNameSecond) {
    const element = document.createElement(kindOfElement);
    element.classList.add(classNameFisrt, classNameSecond);
    return element;
  }

  noteElements() {
    const noteContainer = this.createDomElement("div", DIV_CLASS);
    this.#addChildElement(this.element, noteContainer);

    const iElement = this.createDomElement(
      "i",
      I_ELEMENT_CLASS_FIRST,
      I_ELEMENT_CLASS_SECOND
    );
    this.#addChildElement(noteContainer, iElement);

    const input = this.createDomElement("input", INPUT_CLASS);
    input.type = "checkbox";
    this.#addChildElement(noteContainer, input);

    const label = this.createDomElement("label", LABEL_CLASS);
    this.#addChildElement(noteContainer, label);

    const editBtn = this.createDomElement("button", EDIT_BTN_CLASS);
    editBtn.setAttribute("target", interfaceUser.allEvents.length);
    editBtn.innerText = "edit";
    this.#addChildElement(noteContainer, editBtn);

    return {
      noteContainer: noteContainer,
      il: iElement,
      input: input,
      label: label,
      editBtn: editBtn,
    };
  }

  #addChildElement(element, child) {
    element.appendChild(child);
  }

  editTextNote = (e) => {
    const index = e.target.getAttribute("target");
    const changedText = e.target.previousSibling.innerText;
    const noteToChange = interfaceUser.allEvents[index];
    const changedElement = noteToChange.label;

    editNote.createEditForm();

    const textInPlaceholder = interfaceUser.inputTxt();

    editNote.textToChange(textInPlaceholder);

    editNote.confirmChangedText(editNote, changedText);
    editNote.confirmChangedText(changedElement);

    const place = document.getElementById("edit");
    place.placeholder = changedText;

    interfaceUser.container.classList.add(CONTAINER_BLUR_CLASS);
  };
}

export const editNote = new EditNote();
