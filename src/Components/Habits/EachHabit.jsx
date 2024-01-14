import React from 'react'

const EachHabit = ({obj, streakInc, streakDec, streakReset}) => {

    let handleStreakInc = () => {
        streakInc(obj);
      };
    
      let handleStreakDec = () => {
        streakDec(obj);
      };
    
      let handleStreakReset = () => {
        streakReset(obj)
      }

  return (
    <div>
      <strong>{obj.title}</strong>
      <div>
        <p>Streak {obj.streak}</p>
        <button onClick={handleStreakInc}>+1</button>
        <button onClick={handleStreakDec}>-1</button>
        <button onClick={handleStreakReset}>0ställ</button>
        <p>Prio {obj.prio}</p>
      </div>
    </div>
  )
}

export default EachHabit