class Todo {
  constructor(data, selector, handleCheck, handleDelete) {
    this._data = data;
    this._templateElement = document.querySelector(selector);
    this._handleCheck = handleCheck;
    this._handleDelete = handleDelete;

    // this._completed = data.completed;
    // this._name = data.name;
    // this._date = data.date;
    // this._id = data.id;
    // this._selector = selector;
    // this._handleCheck = handleCheck;
    // this._handleDelete = handleDelete;
  }

  _setEventListeners() {
    this._todoDeleteBtn.addEventListener("click", () => {
      this._todoElement.remove();
      this._handleDelete(this._completed);
      this._remove();
    });
    this._todoCheckboxEl.addEventListener("change", () => {
      this._data.completed = !this._data.completed;
      this._toggleCompletion();
      this._handleCheck(this._completed);
    });
  }

  _generateCheckboxEl() {
    this._todoCheckboxEl = this._todoElement.querySelector(".todo__completed");
    this._todoLabel = this._todoElement.querySelector(".todo__label");

    this._todoCheckboxEl.checked = this._data.completed;
    this._todoCheckboxEl.id = `todo-${this._data.id}`;
    this._todoLabel.setAttribute("for", `todo-${this._data.id}`);
  }

  _setDueDate() {
    const dueDate = new Date(this._data.date);
    if (!isNaN(dueDate)) {
      this._todoDate.textContent = `Due: ${dueDate.toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })}`;
    }
  }

  getView() {
    this._todoElement = this._templateElement.content
      .querySelector(".todo")
      .cloneNode(true);

    const todoNameEl = this._todoElement.querySelector(".todo__name");
    this._todoDate = this._todoElement.querySelector(".todo__date");
    this._todoDeleteBtn = this._todoElement.querySelector(".todo__delete-btn");

    todoNameEl.textContent = this._data.name;

    this._generateCheckboxEl();
    this._setEventListeners();
    this._setDueDate();

    return this._todoElement;
  }
}

_toggleCompletion = () => {
  this._completed = !this._completed;
};

_remove = () => {
  this._todoElement.remove();
  this._todoElement = null;
};

export default Todo;
