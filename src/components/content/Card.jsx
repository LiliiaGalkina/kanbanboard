import Image from "../../img/add-card.svg";
import style from "./card.module.scss";

export default function CardBacklog({items}){
    const tasks = items.map(elem => <div key={elem.id} className={style.card__item}>{elem.name}</div>)
 return(
    <div className={style.card}>
        <h2 className={style.card__title}>Backlog</h2>
        <div className={style.card__body}>
            {tasks}
        </div>
        <input type="text" className={style.card__newitem} />
        <button className={style.card__button}>
            <img src={Image} alt="плюс" />
            <p>Add card</p>
        </button>
    </div>
 )
}