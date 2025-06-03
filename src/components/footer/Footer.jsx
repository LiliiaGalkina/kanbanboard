import style from "./footer.module.scss"


export default function Footer(){
    return (
        <footer className={style.footer}>
            <div className={style.footer__info}>
                <div className={style.footer__activetasks}>Active tasks: N</div>
                <div className={style.footer__finishedtasks}>Finished tasks: M</div>
            </div>
            <div className={style.footer__autor}>
            Kanban board by Liliia Galkina, 2025
            </div>
        </footer>
    )
}