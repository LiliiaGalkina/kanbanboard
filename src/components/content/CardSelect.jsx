import Image from "../../img/add-card.svg";
import style from "./card.module.scss";

export default function CardSelect({title, items, newItems, moveItem, selectType, changeOption, value}){
    const tasks = items.map(elem => <div key={elem.id} className={style.card__item}>{elem.name}</div>)
    const options = newItems.map(elem => <option key={elem.id} value={elem.id}>{elem.name}</option>)

 return(
    <div className={style.card}>
        <h2 className={style.card__title}>{title}</h2>
        <div className={style.card__body}>
            {tasks}
        </div>
        <select name="tasks" id={selectType} className={style.card__list} value={value} onChange={changeOption}>
            <option></option>
           {options}
        </select>
        <button className={style.card__button} onClick={moveItem}>
            <img src={Image} alt="плюс" />
            <p>Add card</p>
        </button>
        <button className={style.card__submit}>Submit</button>
    </div>
 )
}