import { useState, useEffect } from "react";
import Task from "./Task";
import DayForm from "./DayForm";
import "../styles/Week.css";

function Day(props) {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem(`tasks-${props.day}`);
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  useEffect(() => {
    try {
      localStorage.setItem(`tasks-${props.day}`, JSON.stringify(tasks));
    } catch (error) {
      console.error("Failed to save tasks to localStorage:", error);
    }
  }, [tasks]);

  const handleAddTask = (task) => {
    if (!task.text || /^\s*$/.test(task.text)) {
      return;
    }

    let newTasks = [];
    if (tasks == null) {
      newTasks = [task];
    } else {
      newTasks = [...tasks, task];
    }
    setTasks(newTasks);
  };

  const handleEdit = (taskId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTasks((prevTasks) =>
      prevTasks.map((item) => (item.id === taskId ? newValue : item))
    );
  };

  const handleRemove = (taskId) => {
    const removedArr = [...tasks].filter((task) => task.id !== taskId);
    setTasks(removedArr);
  };

  return (
    <div className="day-container">
      <div className="day-title">
        <h3>{props.day}</h3>
        <h3>{props.date}</h3>
      </div>
      <hr />
      <DayForm onSubmit={handleAddTask} />
      <Task tasks={tasks} handleEdit={handleEdit} handleRemove={handleRemove} />
    </div>
  );
}

export default Day;
