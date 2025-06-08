import React from "react";
import Image from "../../img/add-card.svg";
import style from "./card.module.scss";
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";

export default function CardSelect({
	title,
	items,
	newItems,
	isSelectVisible,
	handleMoveTask,
	changeOption,
	selectValue,
	setSelectValue
}) {

  const tasks = items.map((elem) => (
    <Link to={`/${elem.id}`} key={elem.id} className={style.card__item}>
      <div>{elem.name}</div>
    </Link>
  ));

  const options = newItems.map((elem) => (
    <option key={elem.id} value={elem.id}>
      {elem.name}
    </option>
  ));
	
const scrollRef = useRef(null);

   useEffect(() => {
	   scrollRef.current.scrollTop = scrollRef.current.scrollHeight
   }, [isSelectVisible]);

  return (
    <div className={style.card} ref={scrollRef}>
      <h2 className={style.card__title}>{title}</h2>
      <div className={style.card__body}>{tasks}</div>
      <select
        name="tasks"
        className={style.card__list}
        data-disable="false"
        value={selectValue}
        onChange={(e) => setSelectValue(e.target.value)}
        style={{ display: isSelectVisible ? "block" : "none" }}
      >
        <option></option>
        {options}
      </select>
      <button
        id="btnAdd"
        className={
          options.length === 0 ? style.card__button_disable : style.card__button
        }
			  onClick={options.length > 0 ? handleMoveTask : ()=>{}}
        style={{ display: isSelectVisible ? "none" : "flex" }}
      >
        <img src={Image} alt="плюс" />
        <p>Add card</p>
      </button>
      <button
        id="btnSubmit"
        className={style.card__submit}
        onClick={changeOption}
        style={{display: isSelectVisible ? "block" : "none" }}
      >
        Submit
      </button>
    </div>
  );
}
