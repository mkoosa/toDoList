import { interfaceUser, NOTE_ID } from "./interfaceUser.esm.js";
import { Note, DIV_CLASS, editNote } from "./noteElement.esm.js";

export class ItemsStorage  {
  createLocalStorage() {
    const divNote = interfaceUser.bindToElements(NOTE_ID);
    const divNoteContainer = [...divNote.childNodes];
    const elements = divNoteContainer;
    const allElements = [];
    
    elements.forEach((element) => {
      let elementToString = element.outerHTML;
      allElements.push(elementToString);
      let allElementsToString = String(allElements);
      console.log('allElements :', allElements);
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
    console.log('storage :', storage);

    if (!storage) return;

    const frag = document.createRange().createContextualFragment(storage);
    console.log('frag :', frag);
    const divNote = interfaceUser.bindToElements(NOTE_ID);
    divNote.appendChild(frag);

    const allNotes = document.querySelectorAll("." + DIV_CLASS);

    this.updatesAllEvents(allNotes);

    let btns = document.querySelectorAll(".note__edit-btn");
    btns = [...btns];

    btns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        console.log("zmien", e);

        // console.log(this.editTextNote());
      });
    });
  }

  updatesAllEvents(elements) {
    elements = [...elements];
    console.log("elemnst :", elements);

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
    console.log("elemntArray :", allEvents);

    interfaceUser.allEvents = allEvents;
  }
}

export const itemStorage = new ItemsStorage();
