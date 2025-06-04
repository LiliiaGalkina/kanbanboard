import { useState } from "react";
import Image from "../../img/add-card.svg";
import style from "./card.module.scss";
import { Link } from "react-router-dom";

export default function CardSelect({title, items, newItems, moveItem, selectType, changeOption}){
    const [selectValue, setSelectValue] = useState("");

    const tasks = items.map(elem => <Link to={`/${elem.id}`} key={elem.id} className={style.card__item} ><div >{elem.name}</div></Link>)
    
    const options = newItems.map(elem => <option key={elem.id} value={elem.id}>{elem.name}</option>)

 return(
    <div className={style.card}>
        <h2 className={style.card__title}>{title}</h2>
        <div className={style.card__body}>
            {tasks}
        </div>
        <select name="tasks" id={selectType} className={style.card__list} data-type={selectType} value={selectValue} onChange={(e) => setSelectValue(e.target.value)}>
            <option></option>
           {options}
        </select>
        <button id="btnAdd" className={style.card__button} data-type={selectType} onClick={moveItem}>
            <img src={Image} alt="плюс" />
            <p>Add card</p>
        </button>
        <button id="btnSubmit" className={style.card__submit} data-type={selectType} onClick={changeOption}>Submit</button>
    </div>
 )
}