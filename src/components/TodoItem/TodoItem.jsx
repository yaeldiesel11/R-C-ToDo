import React from 'react';
const TodoItem = ({ task, deleteTask, marcarCompleted }) => {

    const handleChange = () => {
        marcarCompleted(task.id);
    }

    return (
        <div className={`todo-item ${task.completed ? 'completed' : ''}`}>
            {/* agrega completed al className si esta completed */}
            <input
                type="checkbox"
                checked={task.completed}
                onChange={handleChange}
            />
            <p>{task.text}</p>
            <button className="delete" onClick={() => deleteTask(task.id)}>
                Delete
            </button>
        </div>
    );
}

export default TodoItem;