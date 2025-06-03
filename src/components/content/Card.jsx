import { useState } from "react";
import Image from "../../img/add-card.svg";
import style from "./card.module.scss";

export default function CardBacklog({items, inputNewTask, submitNewTask}){
    const [newTask, setNewTask] = useState("");

    const tasks = items.map(elem => <div key={elem.id} className={style.card__item}>{elem.name}</div>)
  

 return(
    <div className={style.card}>
        <h2 className={style.card__title}>Backlog</h2>
        <div className={style.card__body}>
            {tasks}
        </div>
        <input id="newTask" type="text" className={style.card__newitem} value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
        <button id="cardButtonAdd" className={style.card__button} onClick={inputNewTask}>
            <img src={Image} alt="плюс" />
            <p>Add card</p>
        </button>
        <button id="cardButtonSubmit" className={style.card__submit} onClick={submitNewTask}>Submit</button>
    </div>
 )
}