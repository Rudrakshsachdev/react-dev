import React from "react";
import "../style.css";

export const Todo = () => {
  const [todos, setTodos] = React.useState([]);

  const [inputValue, setInputValue] = React.useState("");

  const handleSubmit = () => {
    setTodos((todos) => {
      return (todos.concat({
        text: inputValue,
        id: Math.floor(Math.random() * 1000),
      }));
    });

    setInputValue("");
  };

  const removeTodo = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Enter new todo"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button onClick={handleSubmit}>Add Todo</button>

      <ul className="todos-list">
        {todos.map((text, id) => {
          <li className="todo" key={id}>
            <span>{text}</span>

            <button className="close" onClick={() => removeTodo(id)}>
              X
            </button>
          </li>;
        })}
      </ul>
    </div>
  );
};
