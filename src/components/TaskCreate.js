import { useState, useEffect } from "react";

function TaskCreate({ onCreate, task, taskformUpdate }) {
  const [title, setTitle] = useState(task ? task.title : "");
  const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : "");

  console.log(title, taskDesc);

  useEffect(() => {
    if (task) {
      setTitle(task.title || "");
      setTaskDesc(task.taskDesc || "");
    }
  }, [task]);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleTaskChange = (event) => {
    setTaskDesc(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title, taskDesc);
    setTitle("");
    setTaskDesc("");
  };

  return (
    <div className={taskformUpdate ? "task-update" : "task-create"}>
      <h3>
        {taskformUpdate ? "Lütfen bir task ekleyin" : "Lütfen bir taskı düzenleyiniz"}
      </h3>
      <form className="task-form" onSubmit={handleSubmit}>
        <label className="task-label">
          {taskformUpdate ? "Başlık" : "Başlığı düzenleyiniz"}
        </label>
        <input value={title} onChange={handleChange} className="task-input" />
        <label className="task-label">
          {taskformUpdate ? "Task gir" : "Taskı düzenleyiniz"}
        </label>
        <textarea
          value={taskDesc}
          onChange={handleTaskChange}
          className="task-input"
          rows={10}
        />
        <button className="task-button" type="submit">
          {taskformUpdate ? "Oluştur" : "Güncelle"}
        </button>
      </form>
    </div>
  );
}

export default TaskCreate;
