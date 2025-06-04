import React from "react";
import style from "./description.module.scss";
import { Link, useMatch } from "react-router-dom";


export default function Description({tasksAll}){
    const match = useMatch('/:id');
    const taskId = match.params.id;
    const task = tasksAll.filter(elem => elem.id === taskId);
 

   

    return (
        <div className={style.wrapper}>
            <main className={style.description}>
                <div className={style.description__body}>
                    <h2 className={style.description__title}>{task[0].name}</h2>
                    <div className={style.description__text}>
                   { task[0].description ? task[0].description : "no description"}
                    </div>
                    <Link to={"/"}>
                    <div className={style.description__close}><span></span><span></span></div>
                    </Link>
                </div>
            </main>
        </div>
    )
}