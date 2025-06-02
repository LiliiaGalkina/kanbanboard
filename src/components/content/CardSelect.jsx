import Image from "../../img/add-card.svg";
import style from "./card.module.scss";

export default function CardSelect({title, items}){
    const tasks = items.map(elem => <div key={elem.id} className={style.card__item}>{elem.name}</div>)
 return(
    <div className={style.card}>
        <h2 className={style.card__title}>{title}</h2>
        <div className={style.card__body}>
            {tasks}
        </div>
        <select name="tasks" id="tasks" className={style.card__list}>
            <option>Login page – performance issues</option>
            <option >Sprint bugfix</option>
        </select>
        <button className={style.card__button}>
            <img src={Image} alt="плюс" />
            <p>Add card</p>
        </button>
    </div>
 )
}