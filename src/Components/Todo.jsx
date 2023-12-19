import React, { useState } from "react";

export default function Todo(props) {
    const [editMode, setEditMode] = useState(false);
    const [editedTitle, setEditedTitle] = useState(props.todos.title);

    const handleEdit =()=> {
        setEditMode(false);
        props.onEdit(editedTitle);

    }

  return (<div>
      {editMode ? (
        <>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
        </>
      ) : (
        <>
          <p>{props.todos.title}</p>
          <p>{props.todos.description}</p>
          <p>{props.todos.time}</p>
          <p>{props.todos.type}</p>
          <button onClick={props.onDelete}>Delete</button>
          <label value="Done">Klart!</label>
          <input type="checkbox" onChange={props.checked} />
          <button onClick={() => setEditMode(true)}>Edit</button>
        </>
      )}
    </div>
)};
