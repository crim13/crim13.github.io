import React, { useState } from "react";

import logo from "../images/logo.png";
import "./TaskList.css";

const initialTasks = [
  { task: "Do groceries", isDone: false, date: new Date() },
  { task: "Wash the car", isDone: false, date: new Date() },
  { task: "Visit doctor at 4pm", isDone: false, date: new Date() },
  { task: "Work on portfolio", isDone: false, date: new Date() },
];
const dateFormat = (task) => {
  const day = task.date.getDate();
  const month = task.date.getMonth() + 1;
  const year = task.date.getFullYear();
  return `Date added: ${day}.${month}.${year}`;
};

export default function TaskList() {
  const [tasks, setTasks] = useState(initialTasks);
  const [input, setInput] = useState("");

  const onAddTask = () => {
    if (input.trim() !== "") {
      setTasks((prev) => [
        ...prev,
        { task: input, isDone: false, date: new Date() },
      ]);
      setInput("");
    } else {
      alert("Please enter a task");
    }
  };
  const onToggleDone = (index) => () => {
    const newTasks = [...tasks];
    newTasks[index].isDone = !newTasks[index].isDone;
    setTasks(newTasks);
  };
  const onDeleteTask = (index) => () => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };
  const onInput = (event) => setInput(event.target.value);
  const onEnter = (event) => (event.key === "Enter" ? onAddTask() : null);
  const onDeleteAllTasks = () => setTasks([]);

  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <h1>Task List</h1>
      </header>

      <div className="task-list">
        {tasks.map((task, index) => (
          <div key={index} className="task-container">
            <span
              onClick={onToggleDone(index)}
              className={`task ${task.isDone ? "done" : ""}`}
            >
              {task.task}
            </span>
            <button className="delete-task" onClick={onDeleteTask(index)}>
              x
            </button>
            <p className="task-date">{dateFormat(task)}</p>
          </div>
        ))}
      </div>

      <div className="task-footer">
        <input
          type="text"
          className="task-input"
          placeholder="Write note"
          value={input}
          onChange={onInput}
          onKeyDown={onEnter}
        />
        <button className="add-task" onClick={onAddTask}>
          +
        </button>
        <button className="delete-all-tasks" onClick={onDeleteAllTasks}>
          x
        </button>
      </div>
    </div>
  );
}
