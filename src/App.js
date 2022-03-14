import "./App.css";
import React from "react";
import AddTodo from "./components/Todo/AddTodo";
import TodoList from "./components/Todo/TodoList";
import { Provider } from "./components/store/todoStore";

const App = () => {
  return (
    <div>
    <Provider>
      <AddTodo />
      <TodoList />
    </div>
    </Provider>
  );
}

