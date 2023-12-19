import React, { useState } from "react";
import { Link } from "react-router-dom";
import Todo from "../Components/Todo";

export default function Task() {

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
  }

  const handleEditDesc = (index, newDesc) => {
    const updatedToDo = [...toDo];
    updatedToDo[index].description = newDesc;
    setToDo(updatedToDo);
  }

  const handleEditHours = (index, newHours) => {
    const updatedToDo = [...toDo];
    updatedToDo[index].time_hours = newHours;
    setToDo(updatedToDo)
  }

  const handleEditMin = (index, newMin) => {
    const updatedToDo = [...toDo];
    updatedToDo[index].time_minutes = newMin;
    setToDo(updatedToDo)
  }

  return (
    <div>
      <h1>Ärendet som skall utföras</h1>

      <ul>
        {toDo.map((todos, i) => {
          return (
            <>
              <Todo
                 key={i}
                checked={() =>handleChecked(i)}
                // onComplete={() => handleComplete(i)}
                todos={todos}
                onDelete={() => handleDelete(i)}
                onEdit={(newTitle )=> handleEdit(i, newTitle)}
                onEditDesc={(newDesc) => handleEditDesc (i,newDesc)}
                onEditHours={(newHours) => handleEditHours(i, newHours)}
                onEditMin={(newMin) => handleEditMin(newMin)}
              />
            </>
          );
        })}
      </ul>
      <hr />

      <h2>Utförda ärender</h2>
      <ul>
        {
          complete
            .filter((task) => task.completed)
            .map((completedTask, i) => <li key={i}>{completedTask.title}</li>)}
      </ul>
    </div>
  );
}
