import "./App.css";
import React from "react";
import AddTodo from "./components/Todo/AddTodo";
import TodoList from "./components/Todo/TodoList";

function App() {
  return (
    <div>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
