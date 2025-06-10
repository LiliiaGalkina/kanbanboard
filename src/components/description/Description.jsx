import React from "react";
import style from "./description.module.scss";
import { useState } from "react";
import { Link, useMatch } from "react-router-dom";

export default function Description({tasksAll, setTaskAll}){
	const match = useMatch("/:id");
    const taskId = match.params.id;
    const task = tasksAll.find(elem => elem.id === taskId);
    const [textDescription, setTextDescription] = useState(task.description ? task.description : "no description");

    const saveDescription = () =>{
        setTaskAll(
            tasksAll.map((task) => {
              if (task.id === taskId) {
                task.description = textDescription;
              }
              return task;
            })
          );
    }

    return (
        <div className={style.wrapper}>
            <main className={style.description}>
                <div className={style.description__body}>
                    <h2 className={style.description__title}>{task.name}</h2>
                    <textarea className={style.description__text} value={textDescription} onChange={(e) => setTextDescription(e.target.value)}/>
                    <Link to={"/"}>
                    <div className={style.description__close} onClick={saveDescription}><span></span><span></span></div>
                    </Link>
                </div>
            </main>
        </div>
    )
}