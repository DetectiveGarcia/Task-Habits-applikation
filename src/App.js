import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import NewHabits from "./Pages/NewHabits";
import NewTask from "./Pages/NewTask";
import Task from "./Pages/Task";
import Habits from "./Pages/Habits";
import Friends from "./Pages/Friends";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newtask" element={<NewTask />} />
        <Route path="/tasks" element={<Task />} />
        <Route path="/newhabits" element={<NewHabits />} />
        <Route path="/habits" element={<Habits />} />
        <Route path="/friends" element={<Friends />} />
      </Routes>
    </div>
  );
}

export default App;
