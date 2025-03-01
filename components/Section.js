class Section {
  constructor({ items, renderer, containerSelector }) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems() {
    this._items.forEach((item) => {
      this.renderer(item);
      // call the renderer and pass it the item as an argument
    });
  }

  addItem(element) {
    // Add element to the container
    this._container.append(element);
  }
}

export default Section;
