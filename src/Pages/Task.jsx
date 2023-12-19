import React, { useState } from "react";
import { Link } from "react-router-dom";
import Todo from "../Components/Todo";

export default function Task() {
  let [isChecked, setIsChecked] = useState(false);
  let [complete, setComplete] = useState([]);
  let [toDo, setToDo] = useState([
    {
      title: "La vida Loca",
      description: "Dont fuk with pable",
      time: "10 minutes",
      type: "Activity with friends",
      completed: false,
    },
    {
      title: "Cleaning chores",
      description: "Wash dishes",
      time: "15 minutes",
      type: "Home Chores",
      completed: false,
    },
    {
      title: " Board meeting",
      description: "Aktier Introduction",
      time: "2 hours",
      type: "Work relations",
      completed: false,
    },
  ]);
  const handleChecked = (index) => {
    if (!isChecked) {
      // Create a copy of the toDo array
      const updatedToDo = [...toDo];
      // Update the completed status of the selected task
      updatedToDo[index].completed = true;
      // Update the state
      setComplete(updatedToDo);
    }
  };
  console.log(handleChecked)


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
                onEdit={(newTitle, )=> handleEdit(i, newTitle)}
                onEditDesc={(newDesc) => handleEditDesc (i,newDesc)}
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
