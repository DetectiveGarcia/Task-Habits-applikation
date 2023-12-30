import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import NewHabits from "./Pages/NewHabits";
import NewTask from "./Pages/NewTask";
import Task from "./Pages/Task";
import Habits from "./Pages/Habits";
import Friends from "./Pages/Friends";
import { useState } from "react";
function App() {

  let [complete, setComplete] = useState([]);
  let [toDo, setToDo] = useState([
    {
      title: "La vida Loca",
      description: "Dont fuk with pable",
      time_hours: 0,
      time_minutes: 10,
      type: "Activity with friends",
      completed: false,
    },
    {
      title: "Cleaning chores",
      description: "Wash dishes",
      time_hours: 0,
      time_minutes: 15,
      type: "Home Chores",
      completed: false,
    },
    {
      title: " Board meeting",
      description: "Aktier Introduction",
      time_hours: 2,
      time_minutes: 0,
      type: "Work relations",
      completed: false,
    },
  ]);
  const handleChecked = (index) => {
    // Create a copy of the toDo array
    const updatedToDo = [...toDo];
    // Update the completed status of the selected task
    updatedToDo[index].completed = true;
    // Update the state
    setComplete(updatedToDo);
  };

  const handleDelete = (index) => {
    const updatedToDo = [...toDo];
    updatedToDo.splice(index, 1);
    setToDo(updatedToDo);
  };

  const handleEdit = (index, newTitle) => {
    const updatedToDo = [...toDo];
    updatedToDo[index].title = newTitle;
    setToDo(updatedToDo);
  };

  const handleEditDesc = (index, newDesc) => {
    const updatedToDo = [...toDo];
    updatedToDo[index].description = newDesc;
    setToDo(updatedToDo);
  };

  const handleEditHours = (index, newHours) => {
    const updatedToDo = [...toDo];
    updatedToDo[index].time_hours = newHours;
    setToDo(updatedToDo);
  };

  const handleEditMin = (index, newMin) => {
    const updatedToDo = [...toDo];

    console.log(updatedToDo[index], index, updatedToDo);
    updatedToDo[index].time_minutes = newMin;
    setToDo(updatedToDo);
  };

  const addTask = (tasks) => {
    setToDo((prevTasks) => [...prevTasks, tasks]);
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newtask" element={<NewTask {...{addTask}} />} />
        <Route path="/tasks/" element={<Task {...{toDo, handleChecked, handleDelete,handleEdit, handleEditDesc, handleEditHours, handleEditMin,complete}}/>} />
        <Route path="/newhabits" element={<NewHabits />} />
        <Route path="/habits" element={<Habits />} />
        <Route path="/friends" element={<Friends />} />
      </Routes>
    </div>
  );
}

export default App;
