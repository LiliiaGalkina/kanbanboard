import React from "react";
import Menu from "./Menu";
import style from "./header.module.scss";

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <h1 className={style.title}>Awesome Kanban Board</h1>
        <Menu />
      </div>
    </header>
  );
}
