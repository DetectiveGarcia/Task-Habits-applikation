import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
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
    <div>
      <h1>Senast ärender</h1>
      <div>
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
        <p>äta</p>
        <p>äta</p>
      </div>
    </div>
  );
};
