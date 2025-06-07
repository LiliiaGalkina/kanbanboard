import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import AppRouter from "../content/AppRouter";
import { data } from "../../tasks";
import { useState, useEffect } from "react";
import style from "./layout.module.scss";
import { BrowserRouter as Router } from "react-router-dom";

export default function Layout() {
    const initialTasks = () => {
        const tasksStr = localStorage.getItem("tasks");
        return tasksStr ? JSON.parse(tasksStr) : data;
      };
    
      const [tasksAll, setTasksAll] = useState(initialTasks);
    
      useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasksAll));
      }, [tasksAll]);

  return (
    <div className={style.container}>
        <Router>
            <Header />
            <AppRouter tasksAll={tasksAll} setTasksAll={setTasksAll}/>
            <Footer tasksAll={tasksAll}/>
        </Router>
    </div>
  );
}
