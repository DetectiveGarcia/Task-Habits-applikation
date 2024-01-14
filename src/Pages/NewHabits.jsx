import React from "react";
import { Link } from "react-router-dom";    


export default function NewHabits({addHabit}) {
  return <>
    <label htmlFor="title">
          Title:
          <input type="text" id="title" />
        </label>
        <label htmlFor="streak">
          Streak:
          <input type="number" id="streak" />
        </label>
        Prio:
        <select name="" id="prio">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={addHabit}>Add new habit</button>
        <Link to="/habits">Habit List</Link>
  </>;
}
