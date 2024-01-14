import React from 'react'
import { Link } from "react-router-dom";
import Filter from "../Components/Habits/Filter";
import HabitsList from "../Components/Habits/HabitsList";

export default function Habits({filteredHabitList, onFilterValueSelected, streakInc, streakDec, handleClick, streakReset}) {



  return (
    <>
      <div>
        <Link to="/newhabits">Add new habit</Link>
        <button onClick={(e)=> handleClick(e)}>All</button>
        <button onClick={(e)=> handleClick(e)}>Prio AscSort</button>
        <button onClick={(e)=> handleClick(e)}>Prio DecSort</button>
        <button onClick={(e)=> handleClick(e)}>Streak AscSort</button>
        <button onClick={(e)=> handleClick(e)}>Streak DecSort</button>
      </div>
      <Filter {...{ onFilterValueSelected }} />
      <HabitsList {...{filteredHabitList, streakInc, streakDec, streakReset}} />
    </>
  )
}
