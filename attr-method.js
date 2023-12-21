class ImageFigure extends HTMLElement {
  connectedCallback() {
    this.src = this.getAttribute("src") || null;
    this.alt = this.getAttribute("alt") || null;
    this.caption = this.getAttribute("caption") || null;
    this.innerHTML = this.render();
  }

  render() {
     return `<figure>
            <img src="${this.src}" alt="${this.alt}">
            <figcaption>${this.caption}</figcaption>
        </figure>`;
  }

  // membuat fungsi ketika nilai pada attribute berubah
  attributeChangedCallback(name, oldValue, newValue) {
    this[name] = newValue;
    this.innerHTML = this.render();
  }

  // membuat pengamat ketika nilai pada attribute berubah
  static get observedAttributes() {
    return ["caption"];
  }
}

customElements.define('image-figure',ImageFigure);
