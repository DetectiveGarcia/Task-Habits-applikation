import React from "react";

export default function Todo(props) {
  return (
    <>
      <div>
      <p>{props.todos.title}</p>
      <p>{props.todos.description}</p>
      <p>{props.todos.time}</p>
      <p>{props.todos.type}</p>
      <button onClick={props.onComplete}>Completed</button>
      <button onClick={props.onDelete}>Delete</button>
      <label value="Done">Klart!</label>
        <input type="checkbox" onChange={props.checked} />
      </div>
      
    </>
  );
}
