import { Note, DIV_CLASS } from "./noteElement.esm.js";
import { ItemsStorage } from "./storage.esm.js";

const ADD_BTN_ID = "addBtn";
export const NOTE_ID = "note";
const NOTE_TXT_ID = "noteTxt";
const CONTAINER_ID = "container";
const CLEAR_ALL_ID = "clearNotes";

class InterfaceUser {
  constructor() {
    this.allEvents = [];
    this.itemsStorage = null;
  }
  createDomElements() {
    this.addBtn = this.#bindToElements(ADD_BTN_ID);
    this.input = this.#bindToElements(NOTE_TXT_ID);
    this.container = this.#bindToElements(CONTAINER_ID);
    this.clearAll = this.#bindToElements(CLEAR_ALL_ID);
    this.events();

    if (!this.itemsStorage) return;

    this.itemsStorage.creteLocalStorage();
    console.log("this.itemsStorage :", this.itemsStorage);
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
    this.noteElement = new Note(this.#bindToElements(NOTE_ID));
    const element = this.noteElement.noteElements();
    this.allEvents.push(element);
    element.label.textContent = this.inputTxt();
    element.editBtn.addEventListener("click", this.noteElement.editTextNote);
    this.clearInputTxt();

    element.il.addEventListener("click", this.removeNote);
    this.clearAll.addEventListener("click", this.clearAllNotes);
    this.prepareLocalStorage();
  };
  
  inputTxt = () => {
    const textInput = this.input.value;
    return textInput;
  };
  
  clearInputTxt = () => {
    this.input.value = "";
  };
  
  removeNote = (e) => {
    const element = e.target.parentNode;
    const ilElement = e.target;
    element.remove();
    
    const indexElementToRemove = e.target.getAttribute('target')
    
    console.log("this.allEvents :", this.allEvents);
    
    this.clearNote(this.allEvents, indexElementToRemove);
    
    console.log("this.allEvents :", this.allEvents);
  };
  
  clearNote(elements, index) {    
    elements.forEach((element, i) => {
      if ( i == index) {
        elements.splice(i, 1);
      }
      
    });
    
    this.prepareLocalStorage();


  }

  clearAllNotes = () => {
    this.allEvents.length = 0;
    const notes = [...document.getElementsByClassName(DIV_CLASS)];
    notes.forEach((el) => el.remove());
    this.itemsStorage.clearStorage();
  };

  prepareLocalStorage() {

    this.itemsStorage = new ItemsStorage(interfaceUser.allEvents);
    this.itemsStorage.creteLocalStorage();
  }
}

window.onload = function () {
  interfaceUser.createDomElements();
};

export const interfaceUser = new InterfaceUser();
