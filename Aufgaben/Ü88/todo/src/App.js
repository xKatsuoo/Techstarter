import React, { useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { task: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const removeCompletedTasks = () => {
    const filteredTasks = tasks.filter((task) => !task.completed);
    setTasks(filteredTasks);
  };

  return (
    <div className="container">
      <Typography variant="h2" component="h1" gutterBottom>
        My to-do list
      </Typography>
      <div>
        <TextField
          id="filled-basic"
          label="Add new Task"
          variant="filled"
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Add a new task"
        />
        <Button variant="contained" color="success" onClick={addTask}>
          Add
        </Button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={task.completed}
                  onChange={() => toggleTask(index)}
                />
              }
              label={
                <span
                  style={{
                    textDecoration: task.completed ? "line-through" : "none",
                  }}
                >
                  {task.task}
                </span>
              }
            />
          </li>
        ))}
      </ul>
      <IconButton
        aria-label="delete"
        color="error"
        onClick={removeCompletedTasks}
      >
        <DeleteIcon />
        Delete
      </IconButton>
    </div>
  );
};

export default TodoApp;
