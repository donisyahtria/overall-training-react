import { useState } from "react";
import "./todo.css";

function Todo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const handleCompleteTasks = () => {
    if (tasks.length > 0) {
      tasks.forEach((task, index) => {
        setTimeout(() => {
          alert(`Completing ${task}`);
          if (index === tasks.length - 1) {
            alert("Semua selesai");
            setTasks([]);
          }
        }, (index + 1) * 1000);
      });
    }
  };

  return (
    <div id="task">
      <h1>TODO</h1>
      <form onSubmit={handleSubmit}>
        <input id="title" value={task} onChange={(e) => setTask(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      <div id="content">
        {tasks.map((task, index) => (
          <p key={index}>{task}</p>
        ))}
      </div>
      <button onClick={handleCompleteTasks}>Complete Task</button>
      <p>{tasks.length > 0 ? `Completing ${tasks[0]}` : ""}</p>
    </div>
  );
}

export default Todo;
