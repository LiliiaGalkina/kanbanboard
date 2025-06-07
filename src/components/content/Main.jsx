import React from "react";
import style from "./main.module.scss";
import CardBacklog from "./Card";
import CardSelect from "./CardSelect";
import { useState, useMemo } from "react";

function Main({ tasksAll, setTasksAll }) {
	const [newTask, setNewTask] = useState("");
	const [isInputvisible, setIsInputVisible] = useState(false);

  const tasks1 = useMemo(
    () => tasksAll.filter((elem) => elem.isBacklog === true),
    [tasksAll]
  );
  const tasks2 = useMemo(
    () => tasksAll.filter((elem) => elem.isReady === true),
    [tasksAll]
  );
  const tasks3 = useMemo(
    () => tasksAll.filter((elem) => elem.isProgress === true),
    [tasksAll]
  );
  const tasks4 = useMemo(
    () => tasksAll.filter((elem) => elem.isFinished === true),
    [tasksAll]
  );

  const makeId = () => {
    const strsource =
      "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let id = "";
    for (let i = 0; i < 10; i++) {
      id += strsource[Math.floor(Math.random() * strsource.length)];
    }
    return id;
  };

	 const handleInputNewTask = () => {
     setIsInputVisible(true);
   };

	const handleSubmitNewTask = () => {
    if (newTask) {
      const newTaskObj = {
        id: makeId(),
        name: newTask,
        description: "This task has no description",
        isBacklog: true,
        isReady: false,
        isProgress: false,
        isFinished: false,
      };
		setTasksAll([...tasksAll, newTaskObj]);
		setNewTask("");
		setIsInputVisible(false);
    }
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
          newTask={newTask}
          setNewTask={setNewTask}
          isInputVisible={isInputvisible}
          handleInputNewTask={handleInputNewTask}
          handleSubmitNewTask={handleSubmitNewTask}
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
