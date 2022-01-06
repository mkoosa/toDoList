import { interfaceUser } from "./interfaceUser.esm.js";

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
    const noteContainer = this.createDomElement("div", "note__container");
    this.element.appendChild(noteContainer);

    const iElent = this.createDomElement("i", "fas", "fa-eraser");
    noteContainer.appendChild(iElent);

    const input = this.createDomElement("input", "note__input");
    input.type = "checkbox";
    noteContainer.appendChild(input);

    const label = this.createDomElement("label", "note__txt");
    noteContainer.appendChild(label);

   

    const editBtn = this.createDomElement("button", "note__edit-btn");
    editBtn.innerText = "edit";
    noteContainer.appendChild(editBtn);

    return {
      noteContainer: noteContainer,
      il: iElent,
      input: input,
      label: label,
      editBtn: editBtn,
    };
  }

  editTextNote() {
    
    console.log('korekta');
  }


}
