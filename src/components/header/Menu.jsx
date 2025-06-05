import React from "react";
import { useState } from "react";
import Logo from "../../img/user-avatar.svg"
import arrow from "../../img/arrow-down-white.svg"
import style from "./header.module.scss"

export default function Menu(){
    const [isMenuVisible, setIsMenuVisible] = useState(false);

        const toggleMenu = () => {
            setIsMenuVisible(!isMenuVisible);
        };
  
    return (
        <nav className={style.menu} onClick={toggleMenu}>
        <div className={style.logo}>
            <div className={style.logo__user}>
                <img src={Logo} alt="логотип пользователя" />
            </div>
            <div className={style.logo__arrow}>
                <img
                    src={arrow}
                    id="logoArrow"
                    alt="белая стрелочка вниз/вверх"
                    style={{ transform: isMenuVisible ? 'rotate(180deg)' : 'rotate(0deg)' }}
                />
            </div>
        </div>
        <ul
            id="menu"
            className={style.menu__list}
            style={{ display: isMenuVisible ? 'block' : 'none' }}
        >
            <li className={style.menu__item}>
                <a href="#" className={style.menu__link}>Profile</a>
            </li>
            <li className={style.menu__item}>
                <a href="#" className={style.menu__link}>Log Out</a>
            </li>
        </ul>
    </nav>
    )
}