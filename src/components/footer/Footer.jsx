import React from "react";
import style from "./footer.module.scss";

export default function Footer({ tasksAll }) {
  const backlogCount = tasksAll.filter(
    (elem) => elem.isBacklog === true
  ).length;
  const finishCount = tasksAll.filter(
    (elem) => elem.isFinished === true
  ).length;

  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.footer__info}>
          <div className={style.footer__activetasks}>
            Active tasks: {backlogCount}
          </div>
          <div className={style.footer__finishedtasks}>
            Finished tasks: {finishCount}
          </div>
        </div>
        <div className={style.footer__autor}>
          Kanban board by Liliia Galkina, 2025
        </div>
      </div>
    </footer>
  );
}
