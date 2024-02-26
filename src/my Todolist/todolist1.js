import React, { useState, useEffect } from "react";
import './todolist1.css';
import Form from "./todolist2.js";
import TodoList from "./todolist3.js";

const App1 = () => {
    const initialState = JSON.parse(localStorage.getItem("todos")) || [];
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState(initialState);
    const [editTodo, setEditTodo] = useState(null);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos]);
    return (
        <div className="container">
            <div className="app-wrapper">
                <div>
                    <div className="header">
                        <h1>Todo-List</h1>
                    </div>
                </div>
            <div>
                <Form input={input} setInput={setInput} todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} editTodo={editTodo}></Form>
            </div>
            <div>
                <TodoList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo}></TodoList>
            </div>
        </div>
        </div>
    );
}

export default App1;