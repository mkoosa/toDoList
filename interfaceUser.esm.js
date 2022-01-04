class InterfaceUser {
  createDomElements() {
    this.addBtn = this.#bindToElements("addBtn");
    this.noteContainer = this.#bindToElements("noteContainer");
    this.noteTxt - this, this.#bindToElements("noteTxt");
    this.editBtn = this.#bindToElements("editBtn");
    this.clearNotes = this.#bindToElements("clearNotes");
  }

  #bindToElements(id) {
    const element = document.getElementById(id);
    return element;
  }
}

window.onload = function () {
  const interfaceUser = new InterfaceUser();
  interfaceUser.createDomElements();
};
