import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function NewTask({ addTask }) {
  const [boo, setBoo] = useState(false);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    time_hours: "",
    time_minutes: "",
    type: "",
    completed: false,
  });

  const [suggestedActivity, setSuggestedActivity] = useState("");

  useEffect(() => {
    const fetchSuggestedActivity = async () => {
      try {
        const response = await fetch("https://www.boredapi.com/api/activity");
        const data = await response.json();
        setSuggestedActivity(data.activity);
      } catch (error) {
        console.error("Error fetching suggested activities", error);
      }
    };
    fetchSuggestedActivity();
  }, [boo]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSuggestedActivities = () => {
    setNewTask((prevTask) => ({
      ...prevTask,
      title: suggestedActivity,
    }));
    setBoo(!boo);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New submit submitted", newTask);
  };

  const handleAddTask = () => {
    addTask(newTask);
    console.log(newTask.type);
  }
  return (
    <div>
      <h1>Creating a new Task</h1>
      <Link to="/tasks">Added Tasks</Link> <br />

      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={newTask.title}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Description:
          <br />
          <textarea
            name="description"
            value={newTask.description}
            onChange={handleInputChange}
          ></textarea>
        </label>
        <br />
        <label>
          Time Estimated:
          <br />
          <input
            type="text"
            name="time_hours"
            value={newTask.time_hours}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="time_minutes"
            value={newTask.time_minutes}
            onChange={handleInputChange}
          />
        </label>

        <p>Kategori:</p>
        <select name="type" id={newTask.type} onChange={handleInputChange}>
          <option value="">Choose category here</option>
          <option value="Activity with friends">Activity with friends</option>
          <option value="Home Chores">Home Chores</option>
          <option value="Work relations">Work relations</option>
        </select>
        <br />
        <br />
        <button type="button" onClick={handleSuggestedActivities}>
          Get suggested Activities
        </button>
        <br />
        <button type="submit" onClick={handleAddTask}>Add Task</button>
      </form>
    </div>
  );
}