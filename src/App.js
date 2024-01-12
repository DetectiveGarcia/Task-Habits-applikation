import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import NewHabits from "./Pages/NewHabits";
import NewTask from "./Pages/NewTask";
import Task from "./Pages/Task";
import Habits from "./Pages/Habits";
import Friends from "./Pages/Friends";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
function App() {
  let [complete, setComplete] = useState([]);
  let [toDo, setToDo] = useState([
    {
      title: "La vida Loca",
      description: "Dont fuk with pable",

      time:"10 timmar ",
      type: "Activity with friends",
      completed: false,
    },
    {
      title: "Cleaning chores",
      description: "Wash dishes",

      time:"15 minuter" ,
      type: "Home Chores",
      completed: false,
    },
    {
      title: " Board meeting",
      description: "Aktier Introduction",

      time: "0",
      type: "Work relations",
      completed: false,
    },
  ]);

  let [filteredToDos, setfilteredToDos] = useState(toDo);

  const handleChecked = (index) => {
    // Create a copy of the toDo array
    const updatedToDo = [...toDo];
    // Update the completed status of the selected task
    updatedToDo[index].completed = true;
    // Update the state
    setComplete(updatedToDo);
  };

  const handleDelete = (index) => {
    const updatedToDo = [...filteredToDos];
    updatedToDo.splice(index, 1);
    setfilteredToDos(updatedToDo);
  };

  const handleEdit = (index, newTitle) => {
    const updatedToDo = [...toDo];
    updatedToDo[index].title = newTitle;
    setfilteredToDos(updatedToDo);
  };

  const handleEditDesc = (index, newDesc) => {
    const updatedToDo = [...toDo];
    updatedToDo[index].description = newDesc;
    setfilteredToDos(updatedToDo);
  };

  const handleEditHours = (index, newHours) => {
    const updatedToDo = [...toDo];
    updatedToDo[index].time_hours = newHours;
    setfilteredToDos(updatedToDo);
  };

  const handleEditMin = (index, newMin) => {
    const updatedToDo = [...toDo];

    console.log(updatedToDo[index], index, updatedToDo);
    updatedToDo[index].time_minutes = newMin;
    setfilteredToDos(updatedToDo);
  };

  const addTask = (tasks) => {
    setfilteredToDos((prevTasks) => [...prevTasks, tasks]);
  };

  function handleClick(e) {
    let option = e.target.value;
    if (option === "All") {
      return setfilteredToDos(toDo);
    } else if (option === "Work relations") {
      return setfilteredToDos(
        toDo.filter((todo) => todo.type === "Work relations")
      );
    } else if (option === "Home Chores") {
      return setfilteredToDos(
        toDo.filter((todo) => todo.type === "Home Chores")
      );
    } else if (option === "Activity with friends") {
      return setfilteredToDos(
        toDo.filter((todo) => todo.type === "Activity with friends")
      );
    }
  }

  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/newtask" element={<NewTask {...{ addTask }} />} />
          <Route
            path="/tasks/"
            element={
              <Task
                {...{
                  filteredToDos,
                  handleChecked,
                  handleDelete,
                  handleEdit,
                  handleEditDesc,
                  handleEditHours,
                  handleEditMin,
                  complete,
                  handleClick,
                }}
              />
            }
          />
          <Route path="/newhabits" element={<NewHabits />} />
          <Route path="/habits" element={<Habits />} />
          <Route path="/friends" element={<Friends />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
