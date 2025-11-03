import { useState } from "react";;
import AppName from "./Components/AppName.jsx";
import AddTodo from "./Components/AddTodo.jsx";
import "./App.css"
import TodoItems from "./Components/TodoItems.jsx";


function App() {
  const [count, setCount] = useState(0);

  const todoItems = [
    {name: "Buy Milk", date: "4/10/2023"},
    {name: "Walk the Dog", date: "4/11/2026"},
    {name: "Go to College", date: "4/12/2026"},
    {name: "Read a Book", date: "4/13/2026"},
  ]
  
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems} />
    </center>
  );
}

export default App;
