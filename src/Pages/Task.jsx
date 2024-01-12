import React, { useState } from "react";
import { Link } from "react-router-dom";
import Todo from "../Components/Todo";

export default function Task({
  filteredToDos,
  handleChecked,
  handleDelete,
  handleEdit,
  handleEditDesc,
  handleEditHours,
  handleEditMin,
  complete,
  handleClick,
}) {
  const [sortOrder, setSortOrder] = useState("asc");

  const toggleSortOrder = () => {
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  };

  const sortedToDos = [...filteredToDos].sort((a, b) => {
    const compareResult = a.title.localeCompare(b.title);
    return sortOrder === "asc" ? compareResult : -compareResult;
  });

  return (
    <div>
      <h1>Ärendet som skall utföras</h1>
      <Link to="/newtask"> Add Tasks</Link>
      <p>Filtrera by kategori: </p>

      <button onClick={toggleSortOrder}>
        {sortOrder === "asc" ? "Sort Descending" : "Sort Ascending"}
      </button>

      <select name="" id="categorySelect" onChange={handleClick}>
        <option value="All">All</option>
        <option value="Work relations">Work relations</option>
        <option value="Activity with friends">Activity with friends</option>
        <option value="Home Chores">Home Chores</option>
      </select>
      <ul>
        {sortedToDos.map((todos, i) => {
          return (
            <>
              <Todo
                key={i}
                checked={() => handleChecked(i)}
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
