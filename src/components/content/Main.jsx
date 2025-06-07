import React from "react";
import style from "./main.module.scss";
import CardBacklog from "./Card";
import CardSelect from "./CardSelect";
import { useState } from "react";

function Main({ tasksAll, setTasksAll }) {
  const [newTask, setNewTask] = useState("");

  const tasks1 = tasksAll.filter((elem) => elem.isBacklog === true);
  const tasks2 = tasksAll.filter((elem) => elem.isReady === true);
  const tasks3 = tasksAll.filter((elem) => elem.isProgress === true);
  const tasks4 = tasksAll.filter((elem) => elem.isFinished === true);

  const makeId = () => {
    const strsource =
      "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let id = "";
    for (let i = 0; i < 10; i++) {
      id += strsource[Math.floor(Math.random() * strsource.length)];
    }
    return id;
  };

  const inputNewTask = () => {
    const inputTask = document.querySelector("#newTask");
    const buttonAdd = document.querySelector("#cardButtonAdd");
    const buttonSubmit = document.querySelector("#cardButtonSubmit");
    inputTask.style.display = "block";
    inputTask.focus();
    buttonAdd.style.display = "none";
    buttonSubmit.style.display = "block";
  };

  const submitNewTask = () => {
    const inputTask = document.querySelector("#newTask");
    const buttonAdd = document.querySelector("#cardButtonAdd");
    const buttonSubmit = document.querySelector("#cardButtonSubmit");
    if (inputTask.value !== "") {
      let newTask = {};
      newTask.id = makeId();
      newTask.name = inputTask.value;
      newTask.description = "This task has no description";
      newTask.isBacklog = true;
      newTask.isReady = false;
      newTask.isProgress = false;
      newTask.isFinished = false;
      setTasksAll([...tasksAll, newTask]);
    }
    setNewTask("");
    inputTask.style.display = "none";
    buttonSubmit.style.display = "none";
    buttonAdd.style.display = "flex";
  };

  const moveItem = (e) => {
    const type = e.target.parentElement.getAttribute("data-type");
    const select = document.querySelector(`select[data-type = ${type}]`);
    const btnAdd = document.querySelector(`button#btnAdd[data-type = ${type}]`);
    const btnSubmit = document.querySelector(
      `button#btnSubmit[data-type = ${type}]`
    );
    if (select.length > 1) {
      select.style.display = "block";
      btnAdd.style.display = "none";
      btnSubmit.style.display = "block";
      btnAdd.parentElement.scrollTop = btnAdd.parentElement.scrollHeight;
    } else {
      return;
    }
  };

  const changeOption = (e) => {
    const type = e.target.getAttribute("data-type");
    const select = document.querySelector(`select[data-type = ${type}]`);
    const btnAdd = document.querySelector(`button#btnAdd[data-type = ${type}]`);
    const btnSubmit = document.querySelector(
      `button#btnSubmit[data-type = ${type}]`
    );
    let id = select.value;
    setTasksAll(
      tasksAll.map((task) => {
        if (task.id === id) {
          if (task.isProgress === true) {
            task.isProgress = false;
            task.isFinished = true;
          }
          if (task.isReady === true) {
            task.isReady = false;
            task.isProgress = true;
          }
          if (task.isBacklog === true) {
            task.isBacklog = false;
            task.isReady = true;
          }
        }
        return task;
      })
    );
    btnSubmit.style.display = "none";
    btnAdd.style.display = "flex";
    select.style.display = "none";
  };

  return (
    <main className={style.main}>
      <div className={style.container}>
        <CardBacklog
          items={tasks1}
          inputNewTask={inputNewTask}
          submitNewTask={submitNewTask}
          newTask={newTask}
          setNewTask={setNewTask}
        />
        <CardSelect
          title="Ready"
          items={tasks2}
          newItems={tasks1}
          selectType="ready"
          moveItem={moveItem}
          changeOption={changeOption}
        />
        <CardSelect
          title="In Progress"
          items={tasks3}
          newItems={tasks2}
          selectType="progress"
          moveItem={moveItem}
          changeOption={changeOption}
        />
        <CardSelect
          title="Finished"
          items={tasks4}
          newItems={tasks3}
          selectType="finish"
          moveItem={moveItem}
          changeOption={changeOption}
        />
      </div>
    </main>
  );
}

export { Main };
