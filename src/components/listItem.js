import React, { useState } from "react";

function ListItem(props) {
  const [editTodo, setEditTodo] = useState(false);
  const [todoText, setTodoText] = useState(props.todo.title);

  const handleSave = () => {
    setEditTodo(false);
    props.editTodo(props.todo.id, todoText);
  };

  

  if (editTodo) {
    return (
      <li>
        <input
          type="text"
          id="editTodo"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button disabled={props.todo.completed} onClick={handleSave}>
          Save
        </button>
      </li>
    );
  } else {
    return (
      <li>
        <label
          htmlFor={props.key}
          className={props.todo.completed ? "active" : ""}
        >
          <input
            type="checkbox"
            id={props.key}
            checked={props.todo.completed}
            onChange={() => props.handleSetCompleted(props.todo.id)}
          />
          {props.todo.title}
        </label>
        <button
          disabled={props.todo.completed}
          onClick={() => setEditTodo(true)}
        >
          Edit
        </button>
      </li>
    );
  }
}

export default ListItem;
