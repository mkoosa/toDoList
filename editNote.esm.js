import { interfaceUser } from "./interfaceUser.esm.js";

const DIV_CLASS = "note__edit";
const INPUT_CLASS = "note__input--edit";
const BTN_CLASS = "note__btn--edit";

export class EditNote {
  createEditForm = () => {
    let body = document.getElementById("body");

    this.div = document.createElement("div");

    body.appendChild(this.div);

    this.input = document.createElement("input");
    this.input.type = "input";
    // input.value =

    this.btn = document.createElement("button");
    this.btn.innerHTML = "OK";

    this.div.appendChild(this.input);
    this.div.appendChild(this.btn);

    this.addAllclasses();

    this.changeNote();
  };

  addAllclasses() {
    this.addClassToElement(this.div, DIV_CLASS);
    this.addClassToElement(this.input, INPUT_CLASS);
    this.addClassToElement(this.btn, BTN_CLASS);
  }

  addClassToElement(element, classElement) {
    element.classList.add(classElement);
  }

  changeNote() {
    console.log(" sss:", interfaceUser.allEvents[0]);
  }
}
