import React from 'react';
import styles from "./users.module.css";
import Avatar from "../../Pictures/Avatar.jpeg";
import {NavLink} from "react-router-dom";
import Pagination from "../Common/Pagination/Pagination";

let Users = ({currentPage, onPageChange, totalUsersCount, pageSize ,...props}) => {

    return <div className={styles.usersContainer}>

        <Pagination currentPage={currentPage} onPageChange={onPageChange} totalUsersCount={totalUsersCount} pageSize={pageSize} />
        {
            props.users.map(u =>
                <div key={u.id}>
      <span>
        <div>
          <NavLink to={"/profile/" + u.id}>
             <img src={u.photos.small != null ? u.photos.small : Avatar}
                  className={styles.userPhoto} alt={''}/>
          </NavLink>
        </div>
       <div>
           {u.followed
               ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                         onClick={() => {props.unfollow(u.id);}}>Unfollow</button>

               : <button disabled={props.followingInProgress.some(id => id === u.id)}
                         onClick={() => {props.follow(u.id);}}>Follow</button>}
       </div>
      </span>
                    <span>
          <span>
            <div>{u.name}</div>
            <div>{u.status}</div>
          </span>
          <span>
              <div>{"u?.location?.country"}</div>
              <div>{"u?.location?.city"}</div>
          </span>
        </span>
                </div>)
        }
    </div>
}

export default Users;
