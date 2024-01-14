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

      time: "10 timmar ",
      type: "Activity with friends",
      completed: false,
    },
    {
      title: "Cleaning chores",
      description: "Wash dishes",

      time: "15 minuter",
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

  ///Habits

  let habits = [
    {
      title: "Vakna kl. 06:00",
      streak: 0,
      prio: 3,
    },
    {
      title: "Träna på morgonen",
      streak: 2,
      prio: 2,
    },
    {
      title: "Meditera",
      streak: 5,
      prio: 1,
    },
    {
      title: "Äta grönsaker (en gång per dag)",
      streak: 15,
      prio: 1,
    },
    {
      title: "Gå o simma(en gång per vecka)",
      streak: 1,
      prio: 1,
    },
    {
      title: "Träna boxning(en gång per vecka)",
      streak: 0,
      prio: 1,
    },
    {
      title: "Spara pengar (en gång i månaden)",
      streak: 4,
      prio: 3,
    },
    {
      title: "Koda varje dag",
      streak: 4,
      prio: 3,
    },
    {
      title: "Ringa mormor minst en gång per vecka",
      streak: 0,
      prio: 1,
    },
  ];

  let [habitsState, setHabitsState] = useState(habits)
  let [filterTextValue, setFilterTextValue] = useState("All")

  let filteredHabitList = habitsState.filter((habit) => {
    if (filterTextValue === "All") {
      return true
    } else if (filterTextValue === "1") {
      return habit.prio === 1
    } else if (filterTextValue === "2") {
      return habit.prio === 2
    } else if (filterTextValue === "3") {
      return habit.prio === 3
    }
  })

  function onFilterValueSelected(filterValue) {
    setFilterTextValue(filterValue);
  }

  let streakInc = (habitToUpdate) => {
    setHabitsState((prevHabit) => {
      return prevHabit.map((habit) =>
        habit === habitToUpdate ? { ...habit, streak: habit.streak + 1 } : habit
      );
    });
  };

  let streakDec = (habitToUpdate) => {
    setHabitsState((prevHabit) => {
      return prevHabit.map((habit) =>
        habit === habitToUpdate
          ? { ...habit, streak: Math.max(0, habit.streak - 1) }
          : habit
      );
    });
  };


  let streakReset = (habitToUpdate) => {
    setHabitsState((prevHabit) => {
      return prevHabit.map((habit) =>
        habit === habitToUpdate
          ? { ...habit, streak: 0 }
          : habit
      );
    });
  };


  let addHabit = () => {

    let updatedHabits = [...habitsState];
    let titleInput = document.querySelector('#title');
    let streakInput = document.querySelector('#streak');
    let prioInput = document.querySelector('#prio');


    let titleValue = titleInput.value;
    let streakValue = streakInput.value;
    let prioValue = prioInput.value;

    let newHabit = {
      title: titleValue,
      streak: Number(streakValue),
      prio: prioValue,
    };

    titleInput.value = '';
    streakInput.value = '';
    prioInput.value = '';



    setHabitsState([newHabit, ...updatedHabits]);
    alert(`New habit: ${titleValue}, added`);

  }

  function handleClick(e) {
    let button = e.target.innerText;
    if (button === "All") {
      setHabitsState(habitsState);
    } else if (button === "Prio AscSort") {
      let sortedHabits = [...habitsState];
      sortedHabits.sort((a, b) => {
        return a.prio - b.prio;
      });
      setHabitsState(sortedHabits);
    } else if (button === "Prio DecSort") {
      let sortedHabits = [...habitsState];
      sortedHabits.sort((a, b) => {
        return b.prio - a.prio;
      });
      setHabitsState(sortedHabits);
    } else if (button === "Streak AscSort") {
      let sortedHabits = [...habitsState];
      sortedHabits.sort((a, b) => {
        return a.streak - b.streak;
      });
      setHabitsState(sortedHabits);
    } else if (button === "Streak DecSort") {
      let sortedHabits = [...habitsState];
      sortedHabits.sort((a, b) => {
        return b.streak - a.streak;
      });
      setHabitsState(sortedHabits);
    }
  }

  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
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
          <Route path="/newhabits" element={<NewHabits {...{addHabit}} />} />
          <Route path="/habits" element={<Habits {...{
            filteredHabitList, onFilterValueSelected,
            streakInc,
            streakDec,
            handleClick,
            streakReset
          }} />} />
          <Route path="/friends" element={<Friends />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
