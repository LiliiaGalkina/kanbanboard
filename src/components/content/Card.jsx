import React from "react";
import Image from "../../img/add-card.svg";
import style from "./card.module.scss";
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";


export default function CardBacklog({
  items,
  newTask,
  setNewTask,
  isInputVisible,
  handleInputNewTask,
  handleSubmitNewTask
}) {
  const tasks = items.map((elem) => (
    <Link to={`/${elem.id}`} key={elem.id} className={style.card__item}>
      <div>{elem.name}</div>
    </Link>
  ));
	
	const inputRef = useRef(null);
	const scrollRef = useRef(null);

	  useEffect(() => {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      inputRef.current.focus();
    }, [isInputVisible]);

  return (
    <div className={style.card} ref={scrollRef}>
      <h2 className={style.card__title}>Backlog</h2>
      <div className={style.card__body}>{tasks}</div>
      <input 
        id="newTask"
		type="text"
		className={style.card__newitem}
        value={newTask}
			  onChange={(e) => setNewTask(e.target.value)}
			  ref={inputRef}
        style={{ display: isInputVisible ? "block" : "none" }}
      />
      <button
        id="cardButtonAdd"
        className={style.card__button}
        onClick={handleInputNewTask}
        style={{ display: isInputVisible ? "none" : "flex" }}
      >
        <img src={Image} alt="плюс" />
        <p>Add card</p>
      </button>
      <button
        id="cardButtonSubmit"
        className={style.card__submit}
        onClick={handleSubmitNewTask}
        style={{ display: isInputVisible ? "block" : "none" }}
      >
        Submit
      </button>
    </div>
  );
}
