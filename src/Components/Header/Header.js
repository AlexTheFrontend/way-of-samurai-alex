import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <div className={classes.containerWrapper}>
        <header className={classes.header}>
            <img src='https://image.freepik.com/free-vector/abstract-logo-with-colorful-leaves_1025-695.jpg'
                 alt='Logo'/>
            <div className={classes.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
            <div className={classes.myHeader}>{`MetaBook social network`}</div>
        </div>
    )
}

export default Header;

