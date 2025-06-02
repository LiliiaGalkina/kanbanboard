import style from "./main.module.scss";
import CardBacklog from "./Card";
import CardSelect from "./CardSelect";
import { data } from "../../tasks";

export default function Main(){
    const tasks1 = data.filter(elem => elem.isBacklog == true);
    const tasks2 = data.filter(elem => elem.isReady == true);
    const tasks3 = data.filter(elem => elem.isProgress == true);
    const tasks4 = data.filter(elem => elem.isFinished == true);
    return (
        <main className={style.main}>
            <CardBacklog items = {tasks1}/>
            <CardSelect title = "Ready" items={tasks2}/>
            <CardSelect title = "In Progress" items={tasks3}/>
            <CardSelect title = "Finished" items={tasks4}/>
        </main>
    )
}