import { useState, useEffect } from "react";
import style from "./main.module.scss";
import CardBacklog from "./Card";
import CardSelect from "./CardSelect";
import { data } from "../../tasks";

function Main() {
    const initialTasks = () => {
        const tasksStr = localStorage.getItem("tasks");
        return tasksStr ? JSON.parse(tasksStr) : data;
      };
    const [tasksAll, setTasksAll] = useState(initialTasks);

      useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasksAll));
      }, [tasksAll]);  




  const tasks1 = tasksAll.filter((elem) => elem.isBacklog === true);
  const tasks2 = tasksAll.filter((elem) => elem.isReady === true);
  const tasks3 = tasksAll.filter((elem) => elem.isProgress === true);
  const tasks4 = tasksAll.filter((elem) => elem.isFinished === true);


  function makeId() {
    const strsource =
      "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let id = "";
    for (let i = 0; i < 10; i++) {
      id += strsource[Math.floor(Math.random() * strsource.length)];
    }
    return id;
  }

  function inputNewTask() {
    const inputTask = document.querySelector("#newTask");
    const buttonAdd = document.querySelector("#cardButtonAdd");
    const buttonSubmit = document.querySelector("#cardButtonSubmit");
    inputTask.style.display = "block";
    inputTask.focus();
    buttonAdd.style.display = "none";
    buttonSubmit.style.display = "block";
  }

  function submitNewTask() {
    const inputTask = document.querySelector("#newTask");
    const buttonAdd = document.querySelector("#cardButtonAdd");
    const buttonSubmit = document.querySelector("#cardButtonSubmit");
    if (inputTask.value !== "") {
      let newTask = {};
      newTask.id = makeId();
      newTask.name = inputTask.value;
      newTask.description = "This task has no description";
      newTask.isBacklog = true;
      newTask.isReady= false;
      newTask.isProgress= false;
      newTask.isFinished= false;
      setTasksAll([...tasksAll, newTask]);
      inputTask.value = "";
    }
    inputTask.style.display = "none";
    buttonSubmit.style.display = "none";
    buttonAdd.style.display = "flex";
  }

  function moveItem(e){
    const btnAddTask = e.target.parentElement;
    const selectTasks = btnAddTask.previousElementSibling;
    const btnSelectSubmit = btnAddTask.nextElementSibling;
    selectTasks.style.display = "block";
    btnAddTask.style.display = "none";
    btnSelectSubmit.style.display = "block";
  }



  function changeOption(e){
   let id = e.target.previousElementSibling.previousElementSibling.value
   console.log(id)
   setTasksAll(tasksAll.map(task => {
    if(task.id === id){
        if(task.isProgress === true){
            task.isProgress = false;
            task.isFinished = true;
        }
        if(task.isReady === true){
            task.isReady = false;
            task.isProgress = true;
        }
        if(task.isBacklog === true){
            task.isBacklog = false;
            task.isReady = true;
        }     
    }
   }))
  }

  return (
    <main className={style.main}>
      <CardBacklog
        items={tasks1}
        inputNewTask={inputNewTask}
        submitNewTask={submitNewTask}
      />
      <CardSelect title="Ready" items={tasks2} newItems={tasks1} selectType="ready" moveItem={moveItem} changeOption={changeOption}/>
      <CardSelect title="In Progress" items={tasks3} newItems={tasks2} selectType="progress" moveItem={moveItem}/>
      <CardSelect title="Finished" items={tasks4} newItems={tasks3} selectType="finish" moveItem={moveItem}/>
    </main>
  );
}

export { Main };
