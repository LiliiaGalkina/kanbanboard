import Logo from "../../img/user-avatar.svg"
import arrow from "../../img/arrow-down-white.svg"
import style from "./header.module.scss"

export default function Menu(){

        function showMenu(){
            const menu = document.querySelector("#menu");
           if(menu.style.display === "none"){
            menu.style.display = "block";
           } else {
            menu.style.display = "none";
           }
        }
  
    
    return (
        <nav className={style.menu} onClick={showMenu}>
            <div className={style.logo}>
                <div className={style.logo__user}><img src={Logo} alt="логотип пользователя" /></div>
                <div className={style.logo__arrow}><img src={arrow}alt="белая стрелочка вниз/вверх" /></div>
            </div>
            <ul id="menu" className={style.menu__list} >
                <li className={style.menu__item}><a href="#" className={style.menu__link}>Profile</a></li>
                <li className={style.menu__item}><a href="#" className={style.menu__link}>Log Out</a></li>
            </ul>
        </nav>
    )
}