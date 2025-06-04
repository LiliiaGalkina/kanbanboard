import Header from "../header/Header";
import { Main } from "../content/Main";
import Footer from "../footer/Footer";
import style from "./layout.module.scss"
import { useState, useEffect } from "react";
import { data } from "../../tasks";

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
      <Header />
      <Main tasksAll={tasksAll} setTasksAll={setTasksAll}/>
      <Footer tasksAll={tasksAll}/>
    </div>
  );
}
