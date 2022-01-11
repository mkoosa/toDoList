import { NOTE_ID } from "./interfaceUser.esm.js";
import { Note } from "./noteElement.esm.js";

export class ItemsStorage extends Note {
  constructor(obj) {
    super();
    this.obj = obj;
  }

  creteLocalStorage() {
    const itemInStorage = localStorage.setItem("myElement", JSON.stringify(this.obj));
    const itemFromStorage =JSON.parse(localStorage.getItem('myElement'));
    console.log('itemFromStorage :', itemFromStorage);

    return itemInStorage
   
  }

  clearStorage() {
    localStorage.clear();
  }

  getDomElementFromStorage() {
    const divNotes = document.getElementById(NOTE_ID);

    for (let p in this.obj) {
      const { noteContainer, il, label, editBtn, input } = this.obj[p];
      //   console.log(noteContainer, il, label, editBtn);

      divNotes.appendChild(noteContainer);
      noteContainer.appendChild(il);
      //   noteContainer.appendChild(input);
      //   noteContainer.appendChild(label);
      //   noteContainer.appendChild(editBtn);
    }
  }
}
