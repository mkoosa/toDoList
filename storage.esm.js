import { interfaceUser, NOTE_ID } from "./interfaceUser.esm.js";
import { Note, DIV_CLASS, editNote } from "./noteElement.esm.js";


export class ItemsStorage extends Note {
  createLocalStorage() {
    const divNote = interfaceUser.bindToElements(NOTE_ID);
    const divNoteContainer = [...divNote.childNodes];
    let elements = divNoteContainer;
    let allElements = [];

    elements.forEach((element) => {
      let elementToString = element.outerHTML;
      allElements.push(elementToString);
      let allElementsToString = String(allElements);
      let elementArray = allElementsToString.split(",");
      let copyAllElementsToString = "";

      elementArray.forEach((element) => (copyAllElementsToString += element));

      let storage = localStorage.setItem(
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

    console.log(' sss:', );
    const storage = JSON.parse(localStorage.getItem("note"));
    console.log('storage :', storage);

    if (!storage) return;

    let frag = document.createRange().createContextualFragment(storage);
    console.log("frag :", frag);
    const divNote = interfaceUser.bindToElements(NOTE_ID);
    divNote.appendChild(frag);

    const allNotes = document.querySelectorAll("." + DIV_CLASS);
    console.log("allNotes :", allNotes);

    allNotes.forEach(el => console.log(' :', el)  )
    console.log(' :', )
  
    let btns = document.querySelectorAll(".note__edit-btn");
    btns = [... btns]
    console.log('btns :', btns);

    btns.forEach(btn => {
      btn.addEventListener('click', (e) => {

        console.log('zmien', e);
        
        // console.log(this.editTextNote());
      })
    })

  
  
  }














}

export const itemStorage = new ItemsStorage();






