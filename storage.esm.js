import { interfaceUser, NOTE_ID } from "./interfaceUser.esm.js";
import {
  Note,
  DIV_CLASS,
  editNote,
  CONTAINER_BLUR_CLASS,
} from "./noteElement.esm.js";

export class ItemsStorage {
  createLocalStorage() {
    const divNote = interfaceUser.bindToElements(NOTE_ID);
    const divNoteContainer = [...divNote.childNodes];
    const elements = divNoteContainer;
    const allElements = [];

    elements.forEach((element) => {
      let elementToString = element.outerHTML;
      allElements.push(elementToString);
      let allElementsToString = String(allElements);
      let elementArray = allElementsToString.split(",");
      let copyAllElementsToString = "";
      elementArray.forEach((element) => (copyAllElementsToString += element));
      const storage = localStorage.setItem(
        "note",
        JSON.stringify(copyAllElementsToString)
      );
    });
  }

  clearStorage() {
    const noteItems = [...document.querySelectorAll(".note__container")];
    noteItems.forEach((noteitem) => noteitem.remove());
    localStorage.clear();
  }

  getItemsFromStorage() {
    const storage = JSON.parse(localStorage.getItem("note"));
    if (!storage) return;
    const frag = document.createRange().createContextualFragment(storage);
    const divNote = interfaceUser.bindToElements(NOTE_ID);
    divNote.appendChild(frag);
    const allNotes = document.querySelectorAll("." + DIV_CLASS);
    this.updatesAllEvents(allNotes);
  }

  updatesAllEvents(elements) {
    elements = [...elements];
    let allEvents = [];

    elements.forEach((element) => {
      const noteContainer = element;
      const il = noteContainer.firstChild;
      const input = il.nextSibling;
      const label = input.nextSibling;
      const editBtn = label.nextSibling;

      let el = {
        noteContainer: noteContainer,
        il: il,
        input: input,
        label: label,
        editBtn: editBtn,
      };

      allEvents.push(el);
    });

    interfaceUser.allEvents = allEvents;
    this.editElementFromStorage(allEvents);
  }

  editElementFromStorage(elements) {
    let editButtons = document.querySelectorAll(".note__edit-btn");
    editButtons = [...editButtons];
    editButtons.forEach((editButton) => {
      editButton.addEventListener("click", (e) => {
        const textToHolder = e.target.previousSibling.innerText;
        const elements = interfaceUser.allEvents;
        editNote.createEditForm();
        editNote.textToChange(textToHolder);
        editNote.confirmChangedText(e.target.previousSibling);
        interfaceUser.container.classList.add(CONTAINER_BLUR_CLASS);
      });
    });

    const notesToEdit = document.querySelectorAll(".fa-eraser");
    notesToEdit.forEach((note) => {
      note.addEventListener("click", (e) => {
        interfaceUser.removeNote(e);
      });
    });
  }
}

export const itemStorage = new ItemsStorage();
