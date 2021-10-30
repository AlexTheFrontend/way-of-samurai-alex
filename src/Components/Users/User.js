import React from 'react';
import styles from "./users.module.css";
import Avatar from "../../Pictures/Avatar.jpeg";
import {NavLink} from "react-router-dom";

const User = ({user, followingInProgress, unfollow, follow}) => {
    return <div>
      <span>
        <div>
          <NavLink to={"/profile/" + user.id}>
             <img src={!!user.photos.small ? user.photos.small : Avatar}
                  className={styles.userPhoto} alt={''}/>
          </NavLink>
        </div>
       <div>
           {user.followed
               ? <button disabled={followingInProgress.some(id => id === user.id)}
                         onClick={() => {
                             unfollow(user.id);
                         }}>Unfollow</button>

               : <button disabled={followingInProgress.some(id => id === user.id)}
                         onClick={() => {
                             follow(user.id);
                         }}>Follow</button>}
       </div>
      </span>
        <span>
          <span>
              <div><b>Username:</b> {user.name}</div>
            <div>{user?.status}</div>
            <div><b>User Id:</b>{` ${user.id}`}</div>
            <div>{user.status}</div>
          </span>
        </span>
    </div>
}


export default User;
