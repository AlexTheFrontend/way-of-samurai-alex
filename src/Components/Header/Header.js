import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img src='https://image.freepik.com/free-vector/abstract-logo-with-colorful-leaves_1025-695.jpg' alt='Logo' />
            <div className={classes.loginBlock}>
                {props.isAuth ? props.login
                : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;

