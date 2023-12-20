import React, { useState, useEffect } from "react";

export default function NewTask() {
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    time: "",
    type: "",
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
  }, []);

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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New submit submitted", newTask);
  };

  return (
    <div>
      <h1>Creating a new Task</h1>
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
            name="time"
            value={newTask.time}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <br />
        <button type="button" onClick={handleSuggestedActivities}>
          Get suggested Activities
        </button>
        <br />
        <button type="submit">Create Task</button>
      </form>
    </div>
  );
}