import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Menu.module.css";

export const Menu = ({ header, items, active, menuRef, closeMenu, stopPropagation }) => {

  return (
    <div className={active ? `${classes.menu} ${classes.active}` : classes.menu} ref={menuRef} onClick={closeMenu}>
      <div className={classes.blur} />
      <div className={classes.menu__content}>
        <div className={classes.menu__header}>
          {header}
        </div>
        <ul className={classes.nav__bar} onClick={stopPropagation}>
          {items.map((item, index) =>
            <li className={classes.nav__item} key={`${item.value} ${index}`}>
              <NavLink exact to={item.href} className={classes.nav__link} activeClassName={classes.active__link}>
                {item.value}
                <span className="material-icons">{item.icon}</span>
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}
