import React from 'react'
import EachHabit from './EachHabit'

const HabitList = ({ filteredHabitList, streakInc, streakDec, streakReset }) => {


    return (
        <ul>
            {filteredHabitList.map((obj) => {
                return (
                    <li key={obj.title} style={{ listStyle: "none" }}>
                        <EachHabit {...{ obj, streakInc, streakDec, streakReset }} />
                    </li>
                )
            })}
        </ul>
    )
}

export default HabitList