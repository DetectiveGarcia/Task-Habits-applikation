import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  //  const latestTasks = [...filteredToDos].sort((a,b) => b.id -a.id).slice(0,3);

  let myArray = [
    {
      title: "La vida Loca",
      description: "Dont fuk with pable",
      time: "10 minutes",
      type: "Activity with friends",
    },
    {
      title: "Cleaning chores",
      description: "Wash dishes",
      time: "15 minutes",
      type: "Home Chores",
    },
    {
      title: " Board meeting",
      description: "Aktier Introduction",
      time: "2 hours",
      type: "Work relations",
    },
  ];

  return (
      <> 
  
    <div className="w-full text-center flex items-center flex-col gap-5">
    
    
  </div>    
    <div>
      <h1 className="font-semibold uppercase text -xl tracking-tight my-1">
        Senast ärender
      </h1>
      <div className="flex justify -between items-center mb -5">
        <Link to="/tasks">Se fler </Link>
        <br />
        {myArray.map((arrays) => (
          <p> Titles: {arrays.title}</p>
        ))}
      </div>
      <h2>Prioritised habbits!</h2>
      <div>
        <Link to="/habits">Se fler</Link>
        <p>äta</p>
        <p>sova</p>
        <p>jobba</p>
      </div>
    </div>
    </>
  );
};
