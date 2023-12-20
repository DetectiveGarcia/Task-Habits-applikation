import React, { useState } from "react";
import { Link } from "react-router-dom";


export default function Todo(props) {
  const [editMode, setEditMode] = useState(false);
  const [editedTitle, setEditedTitle] = useState(props.todos.title);
  const [editedDesc, setEditedDesc] = useState(props.todos.description)
  const [editedHours, setEditedHours] = useState(props.todos.time_hours)
  const [editedMin, setEditedMin] = useState(props.todos.time_minutes)

  // const handleEdit =()=> {
  //     setEditMode(false);
  //     props.onEdit(editedTitle);

  // }
  // const handleEditDesc = () => {
  //   setEditMode(false);
  //   props.onEditDesc(editedDesc)
  // }

  const editHandles = () => {
    setEditMode(false);
    props.onEdit(editedTitle);
    props.onEditDesc(editedDesc);
    props.onEditHours(Number(editedHours, 10));
    props.onEditMin(Number(editedMin, 10))
  }

  return (<div>
    {editMode ? (
      <>
        <input
          type="text"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
        />
        
        <input
          type="text"
          value={editedDesc}
          onChange={(e) => setEditedDesc(e.target.value)}
        />
        <input 
          type="number" 
          value={editedHours} 
          onChange={(e) => setEditedHours(e.target.value)} 
          />
          <input 
            type="number" 
            value={editedMin} 
            onChange={(e) => setEditedMin(e.target.value)}/>
        <button onClick={editHandles}>Save</button>
      </>
    ) : (
      <>
        <p>{props.todos.title}</p>
        <p>{props.todos.description}</p>
        <p>Timme(ar):{props.todos.time_hours}</p>
        <p>Minuter: {props.todos.time_minutes}</p>
        <p>{props.todos.type}</p>
        <button onClick={props.onDelete}>Delete</button>
        <label value="Done">Klart!</label>
        <input type="checkbox" onChange={props.checked} />
        <button onClick={() => setEditMode(true)}>Edit</button>
      </>
    )}
  </div>
  )
};
