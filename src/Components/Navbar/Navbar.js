import React from 'react'
import c from './Navbar.module.css'

const Navbar = () => {
return(
    <nav className={c.nav}>
    <div className={c.item}>
      <a href="/profile">Profile</a>
    </div>
    <div className={c.item}>
      <a href="/dialogs">Messages</a>
    </div>
    <div className={c.item}>
      <a href="#">News</a>
    </div>
    <div className={c.item}>
      <a href=''>Music</a>
    </div>
    <div className={c.item}>
      <a href=''>Settings</a>
    </div>
  </nav>
)}

export default Navbar;
