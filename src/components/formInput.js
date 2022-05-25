import React, { useContext, useEffect, useState, useRef } from "react";
import { DataContext } from "./dataProvider";

function FormInput() {
  const [todos, setTodos] = useContext(DataContext);
  const [todo, setTodo] = useState("");
  const inputRef=useRef()

  const handleAddTodo = (e) => {
      e.preventDefault();
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        title: todo,
        completed: false,
      },
    ]);
    setTodo("")
    inputRef.current.focus()
  };

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <form autoComplete="false" onSubmit={handleAddTodo}>
      <input
        ref={inputRef}
        type={"text"}
        name="todos"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        id="todo"
        placeholder="What needs to be done"
        required
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default FormInput;
