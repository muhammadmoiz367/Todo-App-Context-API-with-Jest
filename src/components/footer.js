import React, { useContext, useState } from "react";
import { DataContext } from "./dataProvider";

function Footer() {
  const [todos, setTodos] = useContext(DataContext);
  const [checkAll, setCheckAll] = useState(false);

  const handleCheckAll = () => {
    const newTodos = todos.map((todo) => {
      todo.completed = !checkAll;
      return todo;
    });
    setTodos(newTodos);
    setCheckAll(!checkAll);
  };

  const handleDelete = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.completed !== true;
    });
    setTodos(newTodos);
    setCheckAll(false);
  };

  return (
    <>
      {todos.length === 0 ? (
        <h3 style={{ textAlign: "center", color: "crimson" }}>
          Congratulations! nothing to do
        </h3>
      ) : (
        <div className="row">
          <label htmlFor="all">
            <input
              type="checkbox"
              checked={checkAll}
              name="all"
              id="all"
              onChange={handleCheckAll}
            />
            All
          </label>
          <p>You have {todos.filter(todo=> todo.completed !== true).length} to do </p>
          <button id="delete" onClick={handleDelete}>
            Delete
          </button>
        </div>
      )}
    </>
  );
}

export default Footer;
