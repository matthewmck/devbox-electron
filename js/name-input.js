class NameInput extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `HIIIII`;
  }
}

customElements.define("name-input", NameInput);
