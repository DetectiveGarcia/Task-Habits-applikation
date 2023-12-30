import React, { useState } from "react";
import { Link } from "react-router-dom";
import Todo from "../Components/Todo";
import NewTask from "./NewTask";
import { Routes, Route } from "react-router-dom";

export default function Task({toDo, handleChecked, handleDelete,handleEdit, handleEditDesc, handleEditHours, handleEditMin,complete}) {

  return (
    <div>
      <h1>Ärendet som skall utföras</h1>
      <Link to="/newtask"> Add Tasks</Link>

      <ul>
        {toDo.map((todos, i) => {
          return (
            <>
              <Todo
                key={i}
                checked={() => handleChecked(i)}
                // onComplete={() => handleComplete(i)}
                todos={todos}
                onDelete={() => handleDelete(i)}
                onEdit={(newTitle) => handleEdit(i, newTitle)}
                onEditDesc={(newDesc) => handleEditDesc(i, newDesc)}
                onEditHours={(newHours) => handleEditHours(i, newHours)}
                onEditMin={(newMin) => handleEditMin(i, newMin)}
              />
            </>
          );
        })}
      </ul>
      <hr />

      <h2>Utförda ärender</h2>
      <ul>
        {complete
          .filter((task) => task.completed)
          .map((completedTask, i) => (
            <li key={i}>{completedTask.title}</li>
          ))}
      </ul>
    </div>
  );
}
