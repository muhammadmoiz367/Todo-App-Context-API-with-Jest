import React, { useContext } from "react";
import ListItem from "./listItem";
import { DataContext } from "./dataProvider";

function List() {
  const [todos, setTodos] = useContext(DataContext);
  console.log("🚀 ~ file: list.js ~ line 7 ~ List ~ todos", todos);

  const switchCompleted = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const editTodos=(id, text)=>{
    const newTodos=todos.map((todo)=>{
      if(todo.id===id){
        todo.title=text
      }
      return todo
    })
    setTodos(newTodos)
  }


  return (
    <ul>
      {todos.map((todo) => (
        <ListItem
          key={todo.id}
          todo={todo}
          handleSetCompleted={switchCompleted}
          editTodo={editTodos}
        />
      ))}
    </ul>
  );
}

export default List;
