import React from 'react';
import styles from "./users.module.css";
import Avatar from "../../Pictures/Avatar.jpeg";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

let Users = (props) => {


    //to round up a number
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    // console.log("Total #", pagesCount);
    let pages = [];
    //limiting pages manually to 50
    for (let i = 1; i <= 50; i++) {
        pages.push(i);
    }

    //other option
    // for (let i=Math.max(this.props.currentPage - 5, 1); i <= Math.max(1, Math.min(this.props.currentPage + 5, pagesCount)); i++) {
    //   pages.push(i);
    // }


    return <div className={styles.usersContainer}>

        <div className={styles.pagesScroll}>
            {pages.map(p => {
                // console.log("Alex",props.onPageChange)
                return <span className={props.currentPage === p && styles.selectedPage}
                             onClick={(e) => {
                                 props.onPageChange(p)
                             }}>{p}</span>
            })}
        </div>
        {

            props.users.map(u =>
                <div key={u.id}>
      <span>
        <div>
          <NavLink to={"/profile/" + u.id}>
             <img src={u.photos.small != null ? u.photos.small : Avatar}
                  className={styles.userPhoto}/>
          </NavLink>
        </div>
       <div>
           {u.followed
               ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                   props.toggleFollowingProgress(true, u.id);
                   axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                       withCredentials: true,
                       headers: {
                           "API-KEY": "0c6cbca3-7592-4cde-9f82-cd833654a00f"
                       }
                   })
                       .then(response => {
                           if (response.data.resultCode == 0) {
                               props.unfollow(u.id);
                           }
                           props.toggleFollowingProgress(false, u.id);
                       });


               }}>Unfollow</button>
               : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                   props.toggleFollowingProgress(true, u.id);
                   axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                       withCredentials: true,
                       headers: {
                           "API-KEY": "0c6cbca3-7592-4cde-9f82-cd833654a00f"
                       }
                   })
                       .then(response => {
                           if (response.data.resultCode == 0) {
                               props.follow(u.id);
                           }
                           props.toggleFollowingProgress(false, u.id);
                       });

               }}>Follow</button>}

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
