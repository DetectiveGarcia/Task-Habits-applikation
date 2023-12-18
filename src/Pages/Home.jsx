import React from "react";
import { Link } from "react-router-dom";


// const named_pages = [
//     "Start",
//     "Tasks",
//     "NewTask",
//     "Habits",
//     "NewHabit"
// ];

// const MenuComponent = () => {
//     const list_items = named_pages.map(({string_value}) => {
//         return <li><Link to="/" + {string_value}>{string_value}</Link></li>
//     });

//     return (
//         <>
//         <div class="menu_container">
//             <ul>
//                 {list_items}
//             </ul>
//         </div>
//         </>
//     );

    /*
    return (
        <div>
            <ul>
                <li>one</li><br/>
                <li>two</li><br/>
                <li>three</li><br/>
            </ul>
        </div>
    );
    */
   
    /*
    <li><Link to="/Start">Start</Link></li>
    <li><Link to="/Tasks">Start</Link></li>
    <li><Link to="/NewTask">Start</Link></li>
    <li><Link to="/Habits">Start</Link></li>
    <li><Link to="/NewHabit">Start</Link></li>
    */
// };

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

  //const menu_dom = MenuComponent();
  return (
    <div>
        {/* {menu_dom} */}
      <h1>Senast</h1>
      <div>
        <Link to="/tasks">Se fler Start</Link><br/>
        <Link to="/tasks">Se fler Task</Link><br/>
        <Link to="/tasks">Se fler Habbit</Link><br/>
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
