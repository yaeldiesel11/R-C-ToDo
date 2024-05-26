import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import { useState } from "react";

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [text, setText] = useState("");

    const addTask = (text) => {
        const newTask = {
            id: tasks.length + 1,
            text,
            completed: false
        };
        setTasks([...tasks, newTask]);
        setText("");
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    }

    const marcarCompleted = (id) => {
        setTasks(tasks.map(task => {
            if (task.id === id) {
                return { ...task, completed: !task.completed };
                // invierte el valor de completed
            }
            else {
                return task;
            }
        }));
    }

    return (
        <div className="todo-list">
            {tasks.map(task => (
                <TodoItem
                    key={task.id}
                    task={task}
                    deleteTask={deleteTask}
                    marcarCompleted={marcarCompleted}
                />
            ))}
            <div className="input">
                <input
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
                <button className="add" onClick={() => addTask(text)}> Add </button>
            </div>
        </div>
    );
}

export default TodoList;