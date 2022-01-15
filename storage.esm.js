import { interfaceUser, NOTE_ID } from "./interfaceUser.esm.js";
import { Note } from "./noteElement.esm.js";

export class ItemsStorage extends Note {
  createLocalStorage() {
    const divNote = interfaceUser.bindToElements(NOTE_ID);
    const divNoteString = divNote.outerHTML;
    const elements = { note: divNoteString };

    localStorage.setItem("note", JSON.stringify(elements));
  }

  clearStorage() {
    const noteItems = [...document.querySelectorAll(".note__container")];
    noteItems.forEach(noteitem => noteitem.remove());
    localStorage.clear();
  };

  getItemsFromStorage() {
   
    const some = JSON.parse(localStorage.getItem("note"));
    if (some) {
      document.getElementById("note").innerHTML = some.note;
    }
  }
}

export const itemStorage = new ItemsStorage();
