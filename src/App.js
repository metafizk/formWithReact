import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  const createTask = (title, taskDesc) => {
    const createdTasks = [
      ...tasks,
      {
        id: Math.round(Math.random() * 999999),
        title,
        taskDesc,
      },
    ];
    setTasks(createdTasks);
  };

  // Silme metodu
  const deleteTaskById = (id) => {
    const afterDeletingTasks = tasks.filter((task) => task.id !== id);
    setTasks(afterDeletingTasks);
  };

  // Güncelleme metodu
  const updateTaskById = (id, newTitle, newTaskDesc) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, title: newTitle, taskDesc: newTaskDesc } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <h1>Görevler</h1>
      <TaskList tasks={tasks} onDelete={deleteTaskById} onUpdate={updateTaskById} />
    </div>
  );
}

export default App;
