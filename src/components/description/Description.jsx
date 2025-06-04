import React from "react";
import style from "./description.module.scss"


export default function Description(){
    return (
        <div className={style.wrapper}>
            <main className={style.description}>
                <div className={style.description__body}>
                    <h2 className={style.description__title}>Main page – performance issues</h2>
                    <div className={style.description__text}>
                    Это был темный лес, издали казавшийся непроходимым. Там Пахапиль охотился, глушил рыбу, спал на еловых ветках. Короче – жил, пока русские не выгнали оккупантов. А когда немцы ушли, Пахапиль вернулся. Он появился в Раквере, где советский капитан наградил его медалью. Медаль была украшена четырьмя непонятными словами, фигурой и восклицательным знаком.
                    </div>
                    <div className={style.description__close}><span></span><span></span></div>
                </div>
            </main>
        </div>
    )
}