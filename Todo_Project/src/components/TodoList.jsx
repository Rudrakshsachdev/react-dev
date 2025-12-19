import { useState } from "react";

const TodoList = () => {
    const [todos, setTodos] = useState([]);


    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    };

    return (
        <div>
            <h2>Todo List</h2>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>



            <form>
                <input type="text" placeholder="Enter todo" id="todoInput" />
                <button type="button" onClick={() => {
                    const input = document.getElementById('todoInput');
                    addTodo(input.value);
                    input.value = '';
                }}>Add Todo</button>
            </form>

            <button onClick={() => addTodo(`Todo ${todos.length + 1}`)}>Add Todo</button>
        </div>
    )
}

export default TodoList;