import React from 'react'
import c from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
      <nav className={c.container}>
        <div className={c.item}>
          {/*Using instead of <a> in SPI to prevent re-loading the page*/}
          {/*Nothing comes into Network (in dev tools)*/}
          <NavLink to="/profile" activeClassName={c.active}>Profile</NavLink>
        </div>
        <div className={c.item}>
          <NavLink to="/users" activeClassName={c.active}>Users</NavLink>
        </div>
        <div className={c.item}>
          <NavLink to="/dialogs" activeClassName={c.active}>Messages</NavLink>
        </div>
        <div className={c.item}>
          <NavLink to="/news" activeClassName={c.active}>News</NavLink>
        </div>
        <div className={c.item}>
          <NavLink to="/music" activeClassName={c.active}>Music</NavLink>
        </div>
        <div className={c.item}>
          <NavLink to="/settings" activeClassName={c.active}>Settings</NavLink>
        </div>
        {/*<div className={c.friends}>*/}
        {/*  <NavLink to="/friends" activeClassName={c.active}>*/}
        {/*    Friends*/}
        {/*    <div>1</div>*/}
        {/*    <div>2</div>*/}
        {/*    <div>3</div>*/}
        {/*  </NavLink>*/}
        {/*</div>*/}
      </nav>
  )
}

export default Navbar;
