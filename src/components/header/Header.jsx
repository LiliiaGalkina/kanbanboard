import Menu from "./Menu"
import style from "./header.module.scss"

export default function Header(){
    return (
        <header className={style.header}>
            <hi className={style.title}>Awesome Kanban Board</hi>
            <Menu/>
        </header>
    )
}