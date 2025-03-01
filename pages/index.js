import { v4 as uuidv4 } from "https://jspm.dev/uuid";

import { initialTodos, validationConfig } from "../utils/constants.js";

import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import TodoCounter from "../components/TodoCounter.js";

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopupEl = document.querySelector("#add-todo-popup");
const addTodoForm = addTodoPopupEl.querySelector(".popup__form");
const addTodoCloseBtn = addTodoPopupEl.querySelector(".popup__close");
// const todoTemplate = document.querySelector("#todo-template"); -> remove
const todosList = document.querySelector(".todos__list");

const todoCounter = new TodoCounter(initialTodos, ".counter__text");

const addTodoPopup = new PopupWithForm({
  popupSelector: "#add-todo-popup",
  handleFormSubmit: (inputValues) => {},
    const name = inputValues.names;
    const dateInput = inputValues.date;

    const date = new Date(dateInput);
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

    const id = uuidv4();
    const newValues = { name, date, id };
    renderTodo(newValues);

    todoCounter.updateTotal(true);
    newTodoValidator.resetValidation();
    addTodoPopup.close();
});

addTodoPopup.setEventListeners();

const closeModal = (modal) => {
  modal.classList.remove("popup_visible");
};

function handleCheck(completed) {
  todoCounter.updateCompleted(completed);
}

function handleDelete(completed) {
  if(completed) {
    todoCounter.updateCompleted(false);
  }
}

function handleAddTodo(completed) {
  todoCounter.updateTotal(false);
}

// The logic in this function should all be handled in the Todo class.
const generateTodo = (data) => {
  const todo = new Todo(data, "#todo-template", handleCheck, handleDelete);
  const todoElement = todo.getView();
  return todoElement;
};

function handleEscapeClose(evt) {
  if (evt.key === "Escape") {
    // find  the currently opened modal
    // const openedModal = document.querySelector(".popup_visible");
    // and close it
  }
}

addTodoButton.addEventListener("click", () => {
  addTodoPopup.open();
});

const renderTodo = (item) => {
  const todo = generateTodo(item);
  section.addItem(todo);
};



// addTodoForm.addEventListener("submit", (evt) => {
//   evt.preventDefault();
//   const name = evt.target.name.value;
//   const dateInput = evt.target.date.value;

//   // Create a date object and adjust for timezone
//   const date = new Date(dateInput);
//   date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

//   const id = uuidv4();
//   const values = { name, date, id };
//   renderTodo(values);
//   // Use addItem method instead of this
//   addTodoPopup.close();
// });

// initialTodos.forEach((item) => {
//   renderTodo(item);
// });
// Use addItem method instead of this

const section = new Section({
  items: initialTodos;
  renderer: renderTodo,
  containerSelector: ".todos__list",
});

section.rendererItems();

// instantiate

const newTodoValidator = new FormValidator(validationConfig, addTodoForm);
newTodoValidator.enableValidation();
