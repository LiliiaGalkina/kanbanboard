import React from "react";
import style from "./main.module.scss";
import CardBacklog from "./Card";
import CardSelect from "./CardSelect";
import { useState, useMemo, useEffect } from "react";

function Main({ tasksAll, setTasksAll }) {
	const [newTask, setNewTask] = useState("");
	const [selectValue, setSelectValue] = useState("");
	const [isInputVisible, setIsInputVisible] = useState(false);
	const [isSelectVisible1, setIsSelectVisible1] = useState(false);
	const [isSelectVisible2, setIsSelectVisible2] = useState(false);
	const [isSelectVisible3, setIsSelectVisible3] = useState(false);
	

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
	

	const handleMoveTask1 = (e) => {
    setIsSelectVisible1(true);
  };

	const handleMoveTask2 = (e) => {
      setIsSelectVisible2(true);
	};
		const handleMoveTask3 = (e) => {
      setIsSelectVisible3(true);
    };


  const changeOption = (e) => {
	  let id = selectValue;
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
	  setSelectValue("");
	  isSelectVisible1 === true ? setIsSelectVisible1(false) : isSelectVisible2 === true ? setIsSelectVisible2(false) : setIsSelectVisible3(false);
  };

  return (
    <main className={style.main}>
      <div className={style.container}>
        <CardBacklog
          items={tasks1}
          newTask={newTask}
          setNewTask={setNewTask}
          isInputVisible={isInputVisible}
          handleInputNewTask={handleInputNewTask}
          handleSubmitNewTask={handleSubmitNewTask}
        />
        <CardSelect
          title="Ready"
          items={tasks2}
          newItems={tasks1}
          selectType="ready"
          isSelectVisible={isSelectVisible1}
          handleMoveTask={handleMoveTask1}
          changeOption={changeOption}
          selectValue={selectValue}
          setSelectValue={setSelectValue}
        />
        <CardSelect
          title="In Progress"
          items={tasks3}
          newItems={tasks2}
          selectType="progress"
          isSelectVisible={isSelectVisible2}
          handleMoveTask={handleMoveTask2}
          changeOption={changeOption}
          selectValue={selectValue}
          setSelectValue={setSelectValue}
        />
        <CardSelect
          title="Finished"
          items={tasks4}
          newItems={tasks3}
          selectType="finish"
          isSelectVisible={isSelectVisible3}
          handleMoveTask={handleMoveTask3}
          changeOption={changeOption}
          selectValue={selectValue}
          setSelectValue={setSelectValue}
        />
      </div>
    </main>
  );
}

export { Main };
