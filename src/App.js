import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { UserContextProvider } from "./UserContext";
import Layout from "./Layout";
import Home from "./Components/Home/home";
import Login from "./Components/Login/login";
import Signup from "./Components/Signup/signup";
import Task from "./Components/Task/task";
import TaskState from "./Context/taskState";

function App() {
  return (
    <TaskState>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={"/signup"} element={<Signup />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/task"} element={<Task />} />
        </Route>
      </Routes>
    </TaskState>
  );
}

export default App;
