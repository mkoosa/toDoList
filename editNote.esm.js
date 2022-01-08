import { interfaceUser } from "./interfaceUser.esm.js";
import { editNote } from "./noteElement.esm.js";

const DIV_CLASS = "note__edit";
export const INPUT_CLASS = "note__input--edit";
const BTN_CLASS = "note__btn--edit";

export class EditNote {
  createEditForm = () => {
    let body = document.getElementById("body");
    this.div = document.createElement("div");

    body.appendChild(this.div);

    this.input = document.createElement("input");
    this.input.setAttribute("id", "edit");
    this.input.type = "input";

    this.btn = document.createElement("button");
    this.btn.innerHTML = "OK";

    this.div.appendChild(this.input);
    this.div.appendChild(this.btn);

    this.addAllClasses();
  };

  addAllClasses() {
    this.addClassToElement(this.div, DIV_CLASS);
    this.addClassToElement(this.input, INPUT_CLASS);
    this.addClassToElement(this.btn, BTN_CLASS);
  }

  addClassToElement(element, classElement) {
    element.classList.add(classElement);
  }

  textToChange(text) {
    this.input.placeholder = text;
  }

  confirmChangedText(element) {
    this.btn.addEventListener("click", () => {
      element.textContent = this.input.value;
      editNote.removeEditNote();
    });
  }

  createPlacwHolderTxt(txt) {
    this.input.placeholder = txt;
  }
  removeEditNote() {
    this.div.remove();
  }
}
