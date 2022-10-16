import React, { useState } from "react";
import Input from "./Components/Input";
import List from "./Components/List";
import "./App.css";

function App() {
  const [inputTodo, setInputTodo] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setInputTodo(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      todo: { value: string };
    };
    const todo = target.todo.value;
    setInputTodo("");
    setTodos([...todos, todo]);
  };

  // const handleDeleteTodo = (e: React.MouseEvent<HTMLSpanElement>): void => {
  //   setTodos(todos.filter((_, index) => index !== 1));
  // };
  const handleDeleteTodo = (e: React.MouseEvent, index: number): void => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <h1>Todo App</h1>

      <Input
        inputTodo={inputTodo}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <List todos={todos} handleDeleteTodo={handleDeleteTodo} />
    </div>
  );
}

export default App;
